import {maxLengthCreator, minLengthCreator} from "./validators";
import {FormControl} from "../../components/common/FormsControl/FormsControl";

export const Input = FormControl('input')

//----------MyPost----------//
export const maxLengthId = maxLengthCreator(2)

export const maxLengthTitle = maxLengthCreator(20)
export const minLengthTitle = minLengthCreator(5)

export const maxLengthBody = maxLengthCreator(50)
export const minLengthBody = minLengthCreator(10)

export const maxLengthName = maxLengthCreator(20)
export const minLengthName = minLengthCreator(2)

export const maxLengthEmail = maxLengthCreator(30)
export const minLengthEmail = minLengthCreator(8)

export const maxLengthLink = maxLengthCreator(30)
export const minLengthLink = minLengthCreator(4)

export const maxLengthPhone = maxLengthCreator(10)
export const minLengthPhone = minLengthCreator(8)

export const maxLengthCompleted = maxLengthCreator(1)




