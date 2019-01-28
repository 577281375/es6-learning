/*
 * @Author: songxue
 * @Date: 2019-01-27 16:09:37
 * @Last Modified by: songxue
 * @Last Modified time: 2019-01-27 17:09:27
 * @Module Name: ModuleName
 */
import { Observable } from 'rxjs';

const observable = Observable.create((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
        observer.complete();
    }, 5000);
});

console.log('just before subscribe');

observable.subscribe({
    next: x => (
        console.log(`got value${x}`)
    ),
    error: err => console.error(`something wrong occurred: ${err}`),
    complete: () => console.log('done'),
});
console.log('just after subscribe');
