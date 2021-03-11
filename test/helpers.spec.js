import { userValidation, courseValidation } from './../helpers/validation';

describe('helpers', () => {
    let mockedInputs, error;

    describe('userValidation', () => {


        it("should return an empty object", () => {
            mockedInputs = {
                name: "name",
                empId: "123456"
            };
            error = {};

            expect(userValidation(mockedInputs)).toMatchObject(error);

        });
        it("return an object  with name and empIp key", () => {
            mockedInputs = {
                name: "!",
                empId: "!"
            };
            error = {
                name: expect.any(String),
                empId: expect.any(String)
            };
            expect(userValidation(mockedInputs)).toEqual(expect.objectContaining(error));

        });
        it("should not display error if prop is not passed", () => {
            mockedInputs = {
                name: "Name",

            };
            error = {};
            expect(userValidation(mockedInputs)).toMatchObject(error);

        });
    });
    describe('courseValidation', () => {

        it("should return an empty object", () => {
            mockedInputs = {
                week: 1,
                course_code: "123456",
                course_name: "name",
                source: "Udemy"
            };
            error = {};

            expect(courseValidation(mockedInputs)).toMatchObject(error);

        });
        it("return an object with course_code and course_name key", () => {
            mockedInputs = {
                course_code: "!!!",
                course_name: "Wro3#gN04Me"
            };
            error = {
                course_code: expect.any(String),
                course_name: expect.any(String)
            };
            expect(courseValidation(mockedInputs)).toEqual(expect.objectContaining(error));

        });
        it("should not display error if prop is not passed", () => {
            mockedInputs = {
                course_code: "123456",
            };
            error = {};
            expect(courseValidation(mockedInputs)).toMatchObject(error);

        });
    });
});