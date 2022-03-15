import React, { useState } from 'react'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

import { useCloseModal, useOpenModal } from './hooks'

import './home.scss'
import NewProfileForm from '../../components/NewProfileForm'

const Home = () => {
  const [isCreatingNewProfile, setIsCreatingNewProfile] = useState(true)

  return (
    <main className="home">
      <div className="container">
        <div className="profile-list">
          <div className="profile-list__header">
            <h2 className="profile-list__title">
              Profiles:
            </h2>

            <Button onClick={ () => useOpenModal(setIsCreatingNewProfile) } > New profile </Button>
          </div>

          <div className="profile-list__body">
            There is no profile created yet. To create your first profile, click the button above.
          </div>
        </div>
      </div>

      <Modal
        isVisible={ isCreatingNewProfile }
        onCloseModal={ () => useCloseModal(setIsCreatingNewProfile) }
      >
        <NewProfileForm />
      </Modal>
    </main>
  )
}


export default Home