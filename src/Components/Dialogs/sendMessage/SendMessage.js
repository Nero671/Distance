import React from "react";
import Emoji from '../../../image/emoji.svg';
import Send from '../../../image/send.svg';
import {Formik, Form, Field, ErrorMessage, FieldArray} from "formik";
import {
    addMessageActionCreator,
    updateMessageText,
    updateNewMessageActionCreator
} from "../../../redux/dialogsPageReducer";

export const SendMessage = ({ newMessageText, sendMessage, updateMessageText }) => {

    let newMessage = React.createRef();

    const onMessageChange = () => {
        let messageText = newMessage.current.value;
        updateMessageText(messageText);
    }

    let addNewMessage = (values) => {
        if(newMessageText.trim() !== '') {
            sendMessage(values);
        } else {
            return false
        }
    }

    const getError = (error) => {
        return error && <p key={error}>{error}</p>
    }

    const getFileSchema = (file) => file && ({
        file: file,
        type: file.type,
        name: file.name
    })

    const gerArrErrorsMessages = (errors) => {
        const result = [];

        errors && Array.isArray(errors) && errors.forEach((value) => {
            if (typeof value === 'string') {
                result.push(value);
            } else {
                Object.values(value).forEach((error) => {
                    result.push(error);
                })
            }
        })

        return result;
    }

    const showFileName = (file) => {
        const fileName = [];

        file && file.forEach((file) => {
            fileName.push(file);
        })

        return fileName
    }

    return (
        <Formik
            initialValues={{
                newMessageBody: '',
                file: undefined,
            }}
            onSubmit={(values, {resetForm}) => {
                addNewMessage( values );
                resetForm( {values: ''} );
            }}
        >

            {(values, errors) => (
                <Form className="send-message">
                    <FieldArray name={'file'}>
                        {(arrayHelper) => (
                            <>
                                <label className="add-file">
                                    <input
                                        className={'input-file'}
                                        type={'file'}
                                        name={'file'}
                                        onChange={(event) => {
                                            const { files } = event.target;
                                            const file = getFileSchema(files.item(0));

                                            if (!file) return;
                                            if(Array.isArray(values.file)) {
                                                arrayHelper.replace(0, file)
                                            } else {
                                                arrayHelper.push(file)
                                            }
                                        }}
                                    />
                                </label>
                                <div>
                                    {showFileName(values.values.file).map((file) =>
                                        <p key={file.name} className={'fileName'}>{file.name.length > 10
                                            ? file.name.slice(0, 10) + '...'
                                            : file.name}
                                        </p>
                                    )}
                                </div>

                                {gerArrErrorsMessages(values.errors.file).map((error) =>
                                    getError(true, error)
                                )}
                            </>
                        )}
                    </FieldArray>
                    <div className="textarea-block">
                        <Field name={'newMessageBody'} innerRef={newMessage} value={newMessageText} onChange={onMessageChange} as={'textarea'} placeholder={"Write a message..."} />
                    </div>
                    <div className="send-message">
                        <button className="message-btn smile-button">
                            <img src={Emoji} alt="siteName" />
                        </button>
                        <button type={'submit'} className="message-btn send-btn">
                            <img src={Send} alt="siteName" />
                        </button>
                    </div>
                </Form>
            )}

        </Formik>
    )
}
