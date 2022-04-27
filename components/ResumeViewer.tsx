import { Loading } from '@nextui-org/react'
import WebViewer from '@pdftron/webviewer'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/ResumeViewer.module.css'

const ResumeViewer = () => {
  const viewer = useRef<HTMLDivElement | null>(null)
  const [isLoaded, setLoaded] = useState(false)
  useEffect(() => {
    const setLoadedTrue = () => {
      console.log('setLoadedTrue')
      setLoaded(true)
    }
    console.log('-->', viewer?.current?.hasChildNodes())
    if (
      typeof window !== 'undefined' &&
      viewer?.current &&
      process.env.RESUME_LINK &&
      !viewer.current?.hasChildNodes()
    ) {
      WebViewer(
        {
          path: '/webviewer/lib',
          initialDoc: process.env.RESUME_LINK,
        },
        viewer.current
      ).then((instance) => {
        console.log('webvierer instance:', instance) // Use other WebViewer APIs
        instance.Core.annotationManager.setReadOnly(true)
        console.log('loaded?', instance.UI.Events.DOCUMENT_LOADED)
        if (instance.UI.Events.DOCUMENT_LOADED) {
          setLoadedTrue()
        }
      })
    }
  }, [])
  const pdfClassName = classNames({'hidden': !isLoaded, 'webviewer': isLoaded})
  return (
    <div className={styles.container}>
        {isLoaded ? null : <Loading size="xl" color='success' >Loading Resume...</Loading>}
      <div
        className={pdfClassName}
        ref={viewer}
        style={{ height: '100vh' }}
      ></div>
    </div>
  )
}

export default ResumeViewer
