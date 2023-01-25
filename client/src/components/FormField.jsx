import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    return (
        <div>
            <div className='flex items-center gap-2 mb-2'>
                <label
                    htmlFor={name}
                    className='label-field block text-md text-[18px] font-medium '
                >
                    {labelName}
                </label>
                {isSurpriseMe &&
                    <button type="button" onClick={handleSurpriseMe} className='font-semibold text-md bg-[#ededed] py-2 px-2 rounded-md text-black'>
                        Surprise Me
                    </button>
                }
            </div>
            <input 
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className='input-field font-medium rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] block w-full px-3 py-2'
            />
        </div>
    )
}

export default FormField