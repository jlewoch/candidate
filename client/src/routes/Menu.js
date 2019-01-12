import React from 'react'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
const Menu = ({ history }) => {
  const items = [
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-file',
      command: () => history.push('/dashboard')
    },
    {
      label: 'Job Postings',
      icon: 'pi pi-briefcase',
      command: () => history.push('/jobPostings')
    },
    {
      label: 'Calendar',
      icon: 'pi pi-fw pi-calendar',
      command: () => history.push('/calendar')
    },

    {
      label: 'Admin',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'Users',
          icon: 'pi pi-users',
          command: () => history.push('/admin/users')
        },
        {
          label: 'Questions',
          icon: 'pi pi-question-circle',
          command: () => history.push('/admin/questions')
        },
        {
          label: 'Steps',
          icon: 'pi pi-question-circle',
          command: () => history.push('/admin/steps')
        }
      ]
    }
  ]

  return (
    <Menubar model={items}>
      <Button
        label={localStorage.getItem('session') ? 'Logout' : 'Login'}
        icon={`pi ${
          localStorage.getItem('session') ? 'pi-sign-out' : 'pi-sign-in'
        }`}
        style={{ marginLeft: 4 }}
      />
    </Menubar>
  )
}

export default Menu
