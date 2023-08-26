'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/pages/Work/Work.module.scss'
import { FilterButtons, WorkItem } from '@/components'
import Img1 from '@/assets/image/img/img3.png'
import Img2 from '@/assets/image/img/img2.png'

const filters = [
  'All',
  'Web app',
  'Mobile app',
  'Product design',
  'Branding',
  'Product discovery',
  'Product Strategy',
]
const works = [
  {
    id: 1,
    img: Img1,
    title: 'Starbucks',
    desc: 'Branding, Mobile app',
  },
  {
    id: 2,
    img: Img2,
    title: 'Starbucks',
    desc: 'Product Design, Web app',
  },
  {
    id: 3,
    img: Img2,
    title: 'Starbucks',
    desc: 'Branding, Mobile app',
  },
  {
    id: 4,
    img: Img1,
    title: 'Starbucks',
    desc: 'Product Design, Web app',
  },
  {
    id: 5,
    img: Img1,
    title: 'Starbucks',
    desc: 'Branding, Mobile app',
  },
  {
    id: 6,
    img: Img2,
    title: 'Starbucks',
    desc: 'Product Design, Web app',
  },
]

function Work() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const handleFilter = (filter) => {
    setSelectedFilter(filter)
    // Replace this with your actual filtering logic
    console.log(filter)
  }

  return (
    <div>
      <div className={styles.title_container}>
        <h1>Our work</h1>
      </div>
      <div>
        <FilterButtons
          filters={filters}
          onFilter={handleFilter}
          selectedFilter={selectedFilter}
        />
      </div>
      <div className={styles.works_container}>
        <WorkItem works={works} />
      </div>
    </div>
  )
}

export default Work