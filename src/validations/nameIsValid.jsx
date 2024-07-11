export const nameIsValid = (name, t) => {

    if (name.trim().length < 3) {
      return { valid: false, error: t('toast-errornoname') };
    }
  
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!regex.test(name)) {
      return { valid: false, error: t('toast-errorbadname')  };
    }
  
    return { valid: true, error: '' };
  }
  