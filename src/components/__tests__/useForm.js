import { renderHook, act } from '@testing-library/react-hooks';
import useForm from 'hooks/useForm';


test('should change the keyworkd', () => {
    const { result } = renderHook(() => useForm())
    
    act(() => {
        result.current.updateKeyword('batman');
    })

    expect(result.current.keyword).toBe('batman')
})

test('should change the rating', () => {
    const { result } = renderHook(() => useForm())
    
    act(() => {
        result.current.updateRating('r');
    })

    expect(result.current.rating).toBe('r')
})

test('should use initial values', () => {
    const { result } = renderHook(() => useForm({initialKeyword: 'r'}));

    expect(result.current.keyword).toBe('r')
})

test('should update correctly the keyword', () => {
    const { result } = renderHook(() => useForm({initialKeyword: 'r'}));

    act(() => {
        result.current.updateKeyword(false);
    })

    expect(result.current.keyword).toBe(false)
})