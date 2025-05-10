//cssModule的使用 用于解决样式冲突
/* 文件名设置为xxx.module.[css|less|sass|stylus] */
import styles from './index.module.scss';
// 规则配置vite.config.js

// 1. cssModule的类名默认是局部作用域的，不能在全局使用
//维持类名  类似于 全局样式
export const CssModuleDemo = () => {
  return (
    <div>
      <span className={styles.title}>这是cssModule标题{styles.title}</span>
      <span className='globalTitle'>这是全局的不转换类名</span>
    </div>
  );
};
