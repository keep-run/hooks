
import styles from './index.css';
import { Button } from 'antd'
export default function () {
  return (
    <div>
      <Button>test</Button>
      <div className={styles.normal}>
        <h1>Page index</h1>
      </div>
    </div>

  );
}
