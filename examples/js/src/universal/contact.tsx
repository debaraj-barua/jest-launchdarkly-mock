import React, { FunctionComponent as FC, useEffect } from 'react'
import { LDClient } from 'launchdarkly-js-client-sdk'

type ContactProps = {
  ldClient: LDClient
}

export const Contact: FC<ContactProps> = ({ ldClient }) => {
  useEffect(() => {
    ldClient && ldClient.track('contact page viewed')
  }, [ldClient])

  return (
    <>
      {ldClient.variation('dev-test-flag') ? <div>Flag on</div> : <div>Flag off</div>}
      <h1>This is the contact page</h1>
      <p>
        Check out my blog at{' '}
        <a href="http://reactjunkie.com" target="_blank" rel="noopener noreferrer">
          reactjunkie.com
        </a>
      </p>
    </>
  )
}

export default Contact
