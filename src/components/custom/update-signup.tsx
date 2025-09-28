import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { useForm } from "react-hook-form"
import { addEmailUpdatesGuest } from "@/firebase/services/firestore.service";

function UpdateSignup() {
    interface emailUpdateFormData {
        name: string
        email: string
    }

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isValid, isSubmitting }
    } = useForm<emailUpdateFormData>(
        { mode: "onChange" }
    )

    // Form validations -- START
    const nameFieldValidations =  {
        required: "Name is required"
    };
    const nameFieldError = errors.name?.message;
    const emailFieldValidations = {
        required: "Email is required",
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address"
        }
    }
    const emailFieldError = errors.email?.message;
    // Form validations -- END

    
    const [addGuestStatus, setAddGuestStatus] = useState< { status: string, email: string } | null>(null);
    const onSubmit = async (data: emailUpdateFormData) => {
        const response = await addEmailUpdatesGuest(data)   
        
        if(response === "success") {
            setAddGuestStatus(
                {status: response,
                email: data.email}
            );
        } else if(response === "already-exists") {
            setAddGuestStatus({
                status: response,
                email: data.email
            })
        }
    }

    return (
        <div className="email-update-signup text-center pl-5 pr-5 max-w-3/4">
            <h3 className="font-bold mb-2">Want to stay in the loop?</h3>
            <div className="mb-5">Sign up to get updates on schedule, accommodations, travel tips, attire, and more as we get approaching the big day.</div>
            {addGuestStatus?.status === "success" && 
                <div className="italic mb-5">Thanks for signing up!  Updates will be sent to {addGuestStatus?.email}.</div>
            }
            {addGuestStatus?.status === "already-exists" && 
                <div className="italic mb-5">You are already signed up to receive updates at {addGuestStatus?.email}.</div>
            }
            {!addGuestStatus && <form 
                    noValidate 
                    onSubmit={ handleSubmit(onSubmit) }
                    className="email-input flex flex-col items-center sm:max-w-1/2 mx-auto"
                >
                    { nameFieldError && 
                        <Label htmlFor="name" className="text-red-500 italic mb-2 w-auto sm:w-full">{errors.name?.message}</Label> 
                    }
                    <Input {...register("name", nameFieldValidations)} id="name" type="name" className="bg-white mb-2 sm:mr-2 w-auto sm:w-full" placeholder="Name" disabled={isSubmitting} />
                    { emailFieldError &&
                        <Label htmlFor="email" className="text-red-500 italic mb-2 w-auto sm:w-full">{errors.email?.message}</Label> 
                    }
                    <Input {...register("email", emailFieldValidations)} id="email" type="email" className="bg-white mb-2 sm:mr-2 w-auto sm:w-full" placeholder="Email" disabled={isSubmitting} />
                    <Button className="bg-(--accent) hover:bg-(--accent-darker) w-1/3 sm:w-auto" disabled={!isValid || isSubmitting}>Sign up</Button>
                </form>
            }
        </div>
    )
}

export default UpdateSignup;