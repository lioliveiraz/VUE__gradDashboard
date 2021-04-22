import { isObjectEmpty, isObjectValuesEmpty } from "@/helpers/service";
import { courseValidation } from "@/helpers/validation";

export const formCoursesMixin={
  data() {
    return {
      courseData: {
        assessment: false,
        link:
          "https://giphy.com/gifs/makespace-cat-yoga-xUPGcyi4YxcZp8dWZq/tile",
      },
      key: 0,
      isFormValid: false,
    };
  },
    methods:{
        
    formValidation() {
        const errors = courseValidation(this.courseData);
        this.isFormValid = isObjectEmpty(errors);
      },
      getUserInput(inputValue, inputName) {
        this.courseData[inputName] = inputValue;
        if (
          !isObjectEmpty(this.courseData) &&
          isObjectValuesEmpty(this.courseData).length === 7
        ) {
          this.formValidation();
        } else {
          this.isFormValid = false;
        }
      }
    }
}