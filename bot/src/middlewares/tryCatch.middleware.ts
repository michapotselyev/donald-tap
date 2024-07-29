type Controller<T extends any[]> = (...args: T) => Promise<void>;

export const tryCatch = <T extends any[]>(controller: Controller<T>) => async (...args: T) => {
  try {
    await controller(...args);
  } catch (error) {
    console.log('Error occurred:');
    console.log(error);
  }
};
