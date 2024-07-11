
export const messageIsValid = (message, t) => {

    if (message.length > 200) {
      return { valid: false, error: t('toast-errormessage') };
    }
  
    return { valid: true, error: '' };
  };
  