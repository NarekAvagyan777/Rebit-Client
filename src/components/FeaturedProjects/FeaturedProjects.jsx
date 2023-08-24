import Image from 'next/image';
import styles from './featured.module.scss';
import epam from '@/assets/image/img/epam.png';
import starbucks from '@/assets/image/img/starbucks.png';
import cocacola from '@/assets/image/img/coca-cola.png';

export default function FeaturedProjects() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Featured projects</h2>

        <div className={styles.content_wrapper}>
            <div>
                <Image src={epam} />
                <p>Epam</p>
            </div>
            <div>
                <Image src={starbucks} />
                <p>Starbucks</p>
            </div>
            <div>
                <Image src={cocacola} />
                <p>Coca-Cola</p>
            </div>
        </div>
    </div>
  )
}
