export const emailIsValid = (email, t) => {

    if (!email) {
      return { valid: false, error: t('toast-errornoemail') };
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return { valid: false, error: t('toast-errorbademail') };
    }

    return { valid: true, error: '' };
  };
  