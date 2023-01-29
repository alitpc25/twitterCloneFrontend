import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useAppDispatch } from '../redux/hooks'
import { updateUserInfo } from '../redux/userSlice'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

interface IProps {
    children: JSX.Element
}

export default function MoreDropdownButton({children} : IProps) {

    const dispatch = useAppDispatch()

    const logOutUser = () => {
        dispatch(updateUserInfo({
            username:null,
            jwtToken:null,
            loggedIn:false
        }))
    }

    return (
        <Menu as="div" className="relative text-left">
          <div>
            <Menu.Button>
              {children}
            </Menu.Button>
          </div>
    
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-10 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        onClick={logOutUser}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block w-full px-4 py-2 text-left text-sm'
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )
}