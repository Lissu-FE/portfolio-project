const useHeader = () => {
  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return { goTop };
};

export default useHeader;
