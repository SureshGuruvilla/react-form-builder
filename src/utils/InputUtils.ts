import { ChangeEvent } from "react";

/**
 * Helps to capture the input value change and store it to state.
 * @param event onChangeEvent.
 * @param stateDispatcher useState dispatcher.
 */
export const handleInputValueChange = (
    event: ChangeEvent<any>,
    stateDispatcher: React.Dispatch<React.SetStateAction<any>>
    ) => {
    const { name, value } = event.target;
    stateDispatcher((prev: any) => ({
        ...prev,
        [name]: value
      }))
}