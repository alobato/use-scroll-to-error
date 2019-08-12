import { useEffect } from 'react'
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed'

export default ({errors, isValid, isSubmitting}) => {

  useEffect(() => {
    if (!isValid && isSubmitting) {
      const selectorKey = Object.keys(errors)[0]
      const errorElement = document.querySelector(`[name="${selectorKey}"]`)
      if (errorElement)
        smoothScrollIntoView(errorElement, { scrollMode: 'if-needed' })
          .then(() => {
            errorElement.focus()
          })
    }
  }, [errors, isValid, isSubmitting])

}
