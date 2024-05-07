interface RequestParams {
  service: string;
  method: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE';
  route: string;
  query?: any;
  body?: any;
}