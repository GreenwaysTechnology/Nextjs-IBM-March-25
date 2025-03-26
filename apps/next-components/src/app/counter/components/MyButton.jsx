'use client'
import { Button } from '@carbon/react';

export function MyButton() {
    return <Button onClick={() => {
        alert('React Carbon')
    }}>
        Button
    </Button>

}