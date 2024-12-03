import css from './Alert.module.css';

// const alertStyle = {
//   color: 'black',
//   backgroundColor: 'green',
//   fontSize: '20',
// };

// function rest(valuer) {
//   switch (valuer) {
//     case 'error':
//       return 'red';
//     case 'info':
//       return 'green';
//     case 'success':
//       return 'blue';
//     default:
//       throw new Error(`Error type ${valuer}`);
//   }
// }
import clsx from 'clsx';

console.log(css);

export default function Alert({ children, valuer, bordered, shadowed }) {
  // const classNames = clsx('alert', valuer, {
  //   bordered: bordered,
  //   shadowed: shadowed,
  // });
  //   if (bordered) {
  //     classNames.push('bordered');
  //   }
  //   if (shadowed) {
  //     classNames.push('shadowed');
  //   }
  const classNames = clsx(
    css.alert,
    css[valuer],
    bordered && css.IsShadowed,
    shadowed && css.IsBordered
  );
  return <div className={classNames}>{children}</div>;
}
