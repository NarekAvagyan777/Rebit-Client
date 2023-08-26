import styles from '@/components/FilterButton/Filterbutton.module.scss'

const FilterButtons = ({ onFilter, selectedFilter, filters }) => {
    return (
      <div className={styles.button_container}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`${styles.filter_button} ${
              selectedFilter === filter ? styles.active : styles.nonactive
            }`}
            onClick={() => onFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    )
  }

  export default FilterButtons