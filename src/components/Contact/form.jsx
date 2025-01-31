import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nameIsValid } from "../../validations/nameIsValid";
import { emailIsValid } from "../../validations/emailIsValid"
import { messageIsValid } from "../../validations/messageIsValid"
import axios from 'axios'

export const Formulario = () => {

    const { t } = useTranslation();

    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 980);
      };
  
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
  
      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }, []);

    const initialInput = {
        name: "",
        email: "",
        message: ""
      }
    
      const [ input, setInput ] = useState(initialInput)
    
      const initialErrors= {
    
        name: { valid: false, error: '' },
        email: { valid: false, error: '' },
        message: { valid: true, error: '' }
    
      }
    
      const [ inputError, setInputError ] = useState(initialErrors)
    
      const handleChange = async (e) => {
        
        const { name, value } = e.target;
    
        if (name === 'name') {
            const { valid, error } = nameIsValid(value, t);
            setInputError((prevInputError) => ({
              ...prevInputError,
              name: { valid, error }
            }));
          }
    
          if (name === 'email') {
            const { valid, error } = emailIsValid(value, t);
            setInputError((prevInputError) => ({
              ...prevInputError,
              email: { valid, error }
            }));
          }
    
          if (name === 'message') {
            const { valid, error } = messageIsValid(value, t);
            setInputError((prevInputError) => ({
              ...prevInputError,
              message: { valid, error }
            }));
          }
    
            setInput((prevInput) => ({
              ...prevInput,
              [name]: value
            }));
          };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
    
        const isValid = Object.values(inputError).every(field => field.valid);
    
       
        if (!isValid) {
            if (!toast.isActive('generic-error-toast')) {
                if(inputError.name.error)
                toast(`${inputError.name.error}`, {
                    toastId: 'generic-error-toast',
                });
                if(inputError.email.error)
                  toast(`${inputError.email.error}`, {
                      toastId: 'generic-error-toast',
                  });
                if(inputError.message.error)
                  toast(`${inputError.message.error}`, {
                      toastId: 'generic-error-toast',
                  });

                  toast(t('toast-errordefault'), {
                    toastId: 'generic-error-toast',
                });
            }
            return;
        }
       

      try {
        const responseBack = await axios.post("https://formspree.io/f/mnnanqng", input, {
          headers: {
            'Content-Type': 'application/json',
          },
    
        });
     
        setInput(initialInput);
        setInputError(initialErrors);
        if (!toast.isActive('success-toast')) {
          toast(t('toast-success'), {
            toastId: 'generic-error-toast',
        });}
        
      } catch (error) {
        console.log(error)
        toast(t('toast-errorserver'), {
          toastId: 'generic-error-toast',
      });
      }
        
    };
    
    return (
        <div className="w-[80%] border-celesteclaro dark:border-azuloscuro border-2 rounded-md py-8 px-12  flex flex-col justify-center font-squada mq980:w-full mq980:py-5 mq980:px-7">
            <h1 className="text-5xl text-white text-center dark:text-azuloscuro mq980:text-3xl">{t('contacttittle')}</h1>
            <form 
                className="flex flex-col text-3xl text-celesteclaro dark:text-azuloscuro items-center mq980:text-2xl"
                onSubmit={handleSubmit}
            >
                <label className="flex flex-col mt-4 w-full">{t('name')}
                    <input 
                        className="border-b-2 bg-transparent  border-celesteclaro dark:border-azuloscuro outline-none mt-2 mq980:mt-1"
                        maxLength="40"
                        name="name" value={input.name} onChange={handleChange}
                    />
                </label>
                <label className="flex flex-col mt-4  w-full">EMAIL:
                    <input 
                        className="border-b-2 bg-transparent border-celesteclaro dark:border-azuloscuro outline-none mt-2 mq980:mt-1"
                        maxLength="40"
                        name="email" value={input.email} onChange={handleChange}
                    />
                </label>
                <label className="flex flex-col my-4 w-full">{t('message')}
                    <input 
                        className="border-b-2 bg-transparent border-celesteclaro dark:border-azuloscuro outline-none mt-2 mq980:mt-1"
                        maxLength="205"
                        name="message" value={input.message} onChange={handleChange}
                    />
                </label>
                <button 
                    className="hover:scale-95  bg-celesteclaro dark:bg-azuloscuro dark:text-celesteclaro rounded-md py-1 w-[150px] mt-4 text-azuloscuro mq980:w-[90px]"
                    type="submit"
                    >
                        {t('sendbutton')}
                </button>
                <ToastContainer
                  position={isSmallScreen ? "top-center" : "top-right"}
                  autoClose={5000}
                  hideProgressBar={true}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  limit={1}
                  queue={false}
                  theme="none"
                  transition={Slide}
                  className="toast-container bg-azuloscuro rounded-md max-w-full w-auto p-0 m-0 border-none shadow-none"
                  bodyClassName="toast-body bg-azuloscuro text-blanco font-squada border-none shadow-none text-[20px] px-2"
               
                />
            </form>
        </div>
        
    )
}