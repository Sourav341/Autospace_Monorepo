/* eslint-disable prefer-const */

import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { ReactNode } from 'react'
import { BrandIcon } from '../atoms/BrandIcon'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { useDialogState } from '@autospace/util/hooks/dialog'

export const Sidebar = ({ children }: { children: ReactNode }) => {
  let [isOpen, setIsOpen] = useDialogState(true)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={open}>
        <IconMenu2 />
      </Button>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-hidden"
          onClose={close}
        >
          <div className="absolute inset-0 overflow-hidden">
            <TransitionChild
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            </TransitionChild>

            <div className="fixed inset-y-0 right-0 max-w-md">
              <TransitionChild
                enter="transform transition ease-in-out duration-1000"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-1000"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="h-full w-screen max-w-md bg-white p-6 shadow-xl">
                  <button
                    type="button"
                    className="absolute top-0 right-0 z-10 m-2 ml-auto rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <IconX className="w=6 b-6 p-1" aria-hidden="true" />
                  </button>
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <BrandIcon />
                  </DialogTitle>
                  {children}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
