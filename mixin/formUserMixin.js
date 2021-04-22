import { isObjectEmpty, isObjectValuesEmpty } from "@/helpers/service";
import { userValidation } from "@/helpers/validation";

export const  formUserMixin={
    data() {
        return {
        formData: {},
          key: 0,
          isFormValid: false,
        };
      },
    methods: {
        formValidation() {
          const errors = userValidation(this.formData);
          this.isFormValid = isObjectEmpty(errors);

        },
        getUserInput(inputValue, inputName) {
          this.formData[inputName] = inputValue;
          if (
            !isObjectEmpty(this.formData) &&
            isObjectValuesEmpty(this.formData).length >= 2
          ) {
            this.formValidation();
          } else {
            this.isFormValid = false;
          }
        }}
}