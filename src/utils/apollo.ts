import { CombinedGraphQLErrors } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ErrorLink } from "@apollo/client/link/error";
import { Observable } from "@apollo/client";
import { toast } from "sonner";
import { REFRESH_TOKEN } from "@/graphql/auth/mutations";
import { print } from "graphql";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  credentials: "include",
});

let isRefreshing = false;

const refreshTokenRequest = async () => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        query: print(REFRESH_TOKEN),
      }),
    });
    const { errors } = await response.json();
    if (errors) {
      throw new Error(errors[0].message);
    }
  } catch (err) {
    throw err;
  }
};

const errorLink = new ErrorLink(({ error, operation, forward }) => {
  if (CombinedGraphQLErrors.is(error)) {
    for (let err of error.errors) {
      switch (err.extensions?.code) {
        // check if url is not /login
        case "UNAUTHENTICATED": {
            console.log(window.location.pathname);
          if (!window.location.pathname.includes("/login")) {
            if (!isRefreshing) {
              isRefreshing = true;
              return new Observable((observer) => {
                refreshTokenRequest()
                  .then(() => {
                    forward(operation).subscribe(observer);
                  })
                  .catch(() => {
                    window.location.href = "/login";
                  });
              });
            }
          }
        }
      }
    }
    if (
      error.errors?.[0].extensions?.code == "BAD_REQUEST" &&
      (error.errors?.[0].extensions.originalError as Error)?.message
    ) {
      toast.error(
        (error.errors?.[0].extensions.originalError as Error)?.message,
      );
    } else {
      toast.error(error.errors?.[0].message || "Something went wrong.");
    }
  }
});

export const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: "all",
    },
    query: {
      errorPolicy: "all",
    },
    mutate: {
      errorPolicy: "all",
    },
  },
});
