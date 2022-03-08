import React, { useState } from 'react'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

import { useCloseModal, useOpenModal } from './hooks'

import './home.scss'

const Home = () => {
  const [createNewProfile, setCreateNewProfile] = useState(false)

  return (
    <main className="home">
      <div className="container">
        <div className="profile-list">
          <div className="profile-list__header">
            <h2 className="profile-list__title">
              Profiles:
            </h2>

            <Button
              onClick={ () => useOpenModal(setCreateNewProfile) }
              title="New profile"
            />
          </div>

          <div className="profile-list__body">
            There is no profile created yet. To create your first profile, click the button above.
          </div>
        </div>
      </div>

      <Modal
        isVisible={ createNewProfile }
        onCloseModal={ () => useCloseModal(setCreateNewProfile) }
      >
        Conteúdo da modal
      </Modal>
    </main>
  )
}


export default Home