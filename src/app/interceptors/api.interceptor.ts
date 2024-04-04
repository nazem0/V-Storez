import type { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req.reportProgress);
  req.headers.append("token","$token");
  return next(req);
};
