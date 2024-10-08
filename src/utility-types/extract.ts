type Status = 'success' | 'error' | 'loading';
type OnlyStringLiterals = Extract<Status, 'success' | 'loading'>;
// OnlyStringLiterals is 'success' | 'loading'