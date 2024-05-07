const serviceBaseUrlMapping: ServiceBaseUrlMapping = {
  api: "https://dummyjson.com",
};

const defaultHeaders: DefaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const request = async ({ service, method, route, query, body }: RequestParams) => {
  try {
    const res: any = await $fetch(serviceBaseUrlMapping[service] + route, {
      method,
      baseURL: serviceBaseUrlMapping[service],
      headers: new Headers(defaultHeaders),
      params: query,
      data: body,
      validateStatus: (status: number) => status < 500,
    });
    return {
      status: res.status,
      content: res.data || res,
    };
  } catch (err: any) {
    console.log("error ");
    return {
      status: err.response ? err.response.status : undefined,
    };
  }
};
