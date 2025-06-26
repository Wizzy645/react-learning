import Image from 'next/image';
import styles from './transaction.module.css';

export default function Transaction() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/user-profile-avatar-png.webp" alt="User Avatar" width={40} height={40} className={styles.userImage} />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.pending} ${styles.status}`}>Pending</span>
            </td>
            <td>4.02.2024</td>
            <td>N300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/user-profile-avatar-png.webp" alt="User Avatar" width={40} height={40} className={styles.userImage} />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.done} ${styles.status}`}>Done</span>
            </td>
            <td>4.02.2024</td>
            <td>N300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/user-profile-avatar-png.webp" alt="User Avatar" width={40} height={40} className={styles.userImage} />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.cancel} ${styles.status}`}>Cancel</span>
            </td>
            <td>4.02.2024</td>
            <td>N300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/user-profile-avatar-png.webp" alt="User Avatar" width={40} height={40} className={styles.userImage} />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.pending} ${styles.status}`}>Pending</span>
            </td>
            <td>4.02.2024</td>
            <td>N300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
