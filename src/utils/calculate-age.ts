export const calculateAge = (birthYear: number): number => {
    const today = new Date();
    const currentYear = today.getFullYear();
    return currentYear - birthYear;
};
