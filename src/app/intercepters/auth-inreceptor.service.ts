import { HttpRequest , HttpHandlerFn , HttpEventType} from "@angular/common/http";
import { tap } from "rxjs/operators";
export function authInterceptor (req:HttpRequest<any>,next:HttpHandlerFn) 
{
    //handle Request
 let modifiedReq = req;
   if (req.url.includes('/products') || req.url.includes('/carts')) {
    const token = localStorage.getItem('token');
    if (token) {
      modifiedReq = req.clone({
        setHeaders: {"Authorization": `Bearer ${token}`}
        });
    }
   }

   // handle Response
    return next(modifiedReq).pipe(
        // you can use operators like tap, catchError, etc. here to handle responses
        tap((event) => {

            if(event.type === HttpEventType.Response) {
            // Example: Log the response event
            console.log('Response event:', event);
            
            if(event.status === 401) {
                // Handle unauthorized access, e.g., redirect to login
                console.error('Unauthorized access - perhaps redirect to login?');
            }
            else if(event.status === 403) {
                // Handle forbidden access
                console.error('Forbidden access - you do not have permission to access this resource.');
            } else if(event.status === 500) {
                // Handle server error
                console.error('Server error - please try again later.');
            } else {
                console.log('Request successful:', event);
            }
        }

        })
    );
}