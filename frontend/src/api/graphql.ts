const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL ?? 'http://localhost:8080/graphql';

export async function graphQlRequest<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed with HTTP ${response.status}`);
  }

  const payload = await response.json();
  if (payload.errors?.length) {
    throw new Error(payload.errors.map((e: { message: string }) => e.message).join(', '));
  }

  return payload.data as T;
}
