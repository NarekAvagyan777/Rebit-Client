'use client'
import Image from 'next/image'
import styles from './contactus.module.scss'
import ArrowRight from '@/assets/image/icons/arrow_right.svg'
import map from '@/assets/image/img/map.png'
import mail from '@/assets/image/icons/mail.svg'
import phone from '@/assets/image/icons/phone_in_talk.svg'
import location from '@/assets/image/icons/location.svg'
import success from '@/assets/image/icons/Success.svg'
import { useEffect, useState } from 'react'

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    general: '',
  })

  const [checked, setChecked] = useState(false)
  const [sended, setSended] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const { name, email, message } = formData
    if (name && email) {
      setChecked(true)
    }
  }, [formData])

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  const handleInputChange = (e) => {
    console.log(e)
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }))
  }

  const newErrors = {
    name: !formData.name ? 'Please enter your first name' : '',
    email: !formData.email ? 'Please enter your email' : '',
    general: '',
  }
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      if (formData.email && !validateEmail(formData.email)) {
        newErrors.email = 'Invalid email format'
      }

      if (!newErrors.name && !newErrors.email) {
        setErrors({ ...newErrors })
        setChecked(true)

        console.log('Form submitted with:', formData)

        // const res = await axios.post(
        //   'https://rebit-server.onrender.com/api/contactUs',
        //   {
        //     firstName: formData.name,
        //     lastName: formData.lastname,
        //     email: formData.email,
        //     message: formData.message,
        //   },
        // )
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setFormData({
          name: '',
          email: '',
          message: '',
        })
        setSended(true)
        setTimeout(() => {
          setSended(false)
          setIsLoading(false) // Set loading state to false after 5 seconds
        }, 5000)
      } else {
        newErrors.general = 'Please fill in all required fields'
        setErrors({ ...newErrors })
        setChecked(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container} id="contactus">
      <h2 className={styles.title}>Let’s collaborate</h2>

      <div className={styles.content_wrapper}>
        {!sended ? (
          <div
            className={`${styles.content_wrapper__element} ${styles.content_wrapper__form}`}
          >
            <div style={{ display: 'flex', width: '100%' }}>
              <input
                type="text"
                // style={{
                //   borderBottomColor: !checked && errors.email ? 'red' : '#c3c7ca',
                // }}
                className={`${styles.form_control} ${
                  !checked && errors.name ? styles.error_req : ''
                }`}
                name="name"
                placeholder="Name Surname"
                value={formData.name}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.name ? (
                <p className={styles.error_text}>{errors.name}</p>
              ) : null}
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange(e)}
                className={`${styles.form_control} ${
                  !checked && errors.email ? styles.error_req : ''
                }`}
              />
              {errors.email ? (
                <p className={styles.error_text}>{errors.email}</p>
              ) : null}
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
              <textarea
                type="message"
                name="message"
                placeholder="Project Details (Optional)"
                value={formData.message}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <button className={styles.button} onClick={handleSubmit}>
                Submit
                <Image src={ArrowRight} alt="Arrow Right" />
              </button>
            </div>
          </div>
        ) : (
          <div
            className={`${styles.content_wrapper__element} ${styles.content_wrapper__form}`}
          >
            <div className={styles.success}>
              <Image src={success} alt="success" />
              <p>Message sent!</p>
            </div>
          </div>
        )}

        <div
          className={`${styles.content_wrapper__element} ${styles.content_wrapper__contact}`}
        >
          <div>
            <Image src={map} alt="map" />
          </div>
          <div className={styles.content_wrapper__contact_block}>
            <div>
              <Image src={mail} alt="mail" />
              <span>hello@rebit.ai</span>
            </div>
            <div>
              <Image src={phone} alt="phone" />
              <span>+374 77 701105</span>
            </div>
            <div>
              <Image src={location} alt="location" />
              <span>6, Tumanyan str, Yerevan, Armenia, 0001</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactUs
