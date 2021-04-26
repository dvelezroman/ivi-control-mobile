interface HttpResponseData<T> extends Response {
  parsedBody?: T
}

type FetchOptions = {
  method: string
  headers?: Object
  body?: string
}

const getOptions = (options: FetchOptions) => {
  const headers: HeadersInit = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  const opts: RequestInit = {
    method: options.method,
    headers,
    body: JSON.stringify(options.body) || null
  }
  return opts
}

export async function http<T>(
  request: RequestInfo,
  opts: FetchOptions,
): Promise<HttpResponseData<T>> {
  const options = getOptions(opts)
  const response: HttpResponseData<T> = await fetch(request, options)
  try {
    response.parsedBody = await response.json()
  } catch (err) {
    throw new Error(response.statusText)
  }
  return response
}