import { FormTypeBookSlot } from '@autospace/forms/src/bookSlot'
import { SearchGaragesQuery } from '@autospace/network/src/gql/generated'
import { Form } from '../atoms/Form'
import { Badge } from '../atoms/Badge'
import { useFormContext, useWatch } from 'react-hook-form'

export const BookSlotPopup = ({
  garage,
}: {
  garage: SearchGaragesQuery['searchGarages'][0]
}) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useFormContext<FormTypeBookSlot>()

  const { startTime, endTime, type, valet } = useWatch<FormTypeBookSlot>()

  return (
    <div className="flex gap-2 text-left border-t-2 border-white bg-white/50 backdrop-blur-sm">
      <div className="mb-2 text-lg font-bold">{garage.displayName}</div>
      {garage.verification?.verified ? (
        <Badge variant="green" size="sm">
          {' '}
          Verified
        </Badge>
      ) : (
        <Badge variant="gray" size="sm">
          Not Verified
        </Badge>
      )}
    </div>
  )
}
