import { notification, Modal } from 'antd';

export const notificationKruger = (type, titulo, message, duration) => {
    return notification[type]({
        message: titulo,
        description: message,
        duration: duration,

    });
}

export const ModalKruger = (content, type = "success", title = "Kruger") => {
    return Modal[type](
        {
            title,
            content
        }
    )
} 