
// import * as mobx from "mobx";
// import * as mobxReact from "mobx-react";
// import './observer';

// const observable = mobx.observable;
// const computed = mobx.computed;
// const observer = mobxReact.observer;

// class Person {
//     // observable state:
//     @observable firstName = "Michel";
//     @observable lastName = "Weststrate";
//     @observable nickName;

//     // computed values:
//     @computed get fullName() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// // reaction: React component that observers state
// const profileView = observer(props => {
//     if (props.person.nickName)
//         return <div>{props.person.nickName}</div>
//     else
//         return <div>{props.person.fullName}</div>
// });

// // actions:
// const michel = new Person();
// ReactDOM.render(
//     React.createElement(profileView, { person: michel }),
//     document.getElementById('root')
// );

// setTimeout(() => michel.nickName = "mweststrate", 5000)
