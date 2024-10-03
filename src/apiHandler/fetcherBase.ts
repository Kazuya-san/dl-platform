import { customFetch } from './customFetch';

interface QueryParams {
  [key: string]: string | number | boolean | undefined;
}

interface CustomHeaders extends Record<string, string | boolean | any> {
  auth?: boolean;
}

interface FetchOptions {
  headers?: CustomHeaders;
  body?: any;
}

class Api {
  constructor(private baseUrl: string) {
    if (!baseUrl) {
      throw new Error('Base URL must be provided');
    }
  }

  private constructUrl(pathName?: string, query?: QueryParams): string {
    const url = new URL(this.baseUrl);
    if (pathName) {
      url.pathname += pathName.startsWith('/') ? pathName : `/${pathName}`;
    }

    if (query) {
      Object.keys(query).forEach((key) => {
        const value = query[key];
        if (value !== undefined) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    return url.toString();
  }

  private async request(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    pathName?: string,
    options?: FetchOptions,
    query?: QueryParams,
  ) {
    const url = this.constructUrl(pathName, query);
    try {
      return await customFetch(url, method, options?.body, options?.headers);
    } catch (error) {
      console.error(`Error with ${method} request to ${url}:`, error);
      throw error;
    }
  }

  async get(pathName?: string, query?: QueryParams, headers?: CustomHeaders) {
    return this.request('GET', pathName, { headers }, query);
  }

  async post(pathName: string, body: any, headers?: CustomHeaders) {
    return this.request('POST', pathName, { headers, body });
  }

  async put(pathName: string, body: any, headers?: CustomHeaders) {
    return this.request('PUT', pathName, { headers, body });
  }

  async delete(pathName: string, headers?: CustomHeaders) {
    return this.request('DELETE', pathName, { headers });
  }
}

const fetchApiUrl = `${process.env.NEXT_PUBLIC_BACKEND_PROTOCOL}${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api`;

console.log({
  fetchApiUrl,
});
export const api = new Api(fetchApiUrl);
