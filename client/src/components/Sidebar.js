import { useState } from 'react'
import { Tab, Nav, Button } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

const Sidebar = () => {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY


    return (
        <div style={{ width: '250px' }} className="d-flex flex-column border-right" >
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
          <Nav variant="tabs" className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="overflow-auto flex-grow-1" style={{ borderRight: '2px solid'}}>
            <Tab.Pane eventKey={CONVERSATIONS_KEY}>
              <Conversations />
            </Tab.Pane>
            <Tab.Pane eventKey={CONTACTS_KEY}>
              <Contacts />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <Button>
            New {conversationsOpen ? 'Conversation' : 'Contact'}
        </Button>
      </div>
    )
}

export default Sidebar
