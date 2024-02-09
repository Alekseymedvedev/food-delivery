import React, {FC, memo, useEffect, useState} from "react";
import classes from './addAndEditForm.module.scss'
import {Input} from "../../shared/input/input";
import {Button} from "../../shared/button/button";
import {useInput} from "../../hooks/useInput";
import {useCreateNewProductMutation, useUpdateProductMutation} from "../../store/API/productsApi";
import {useCreateNewCategoryMutation, useUpdateCategoryMutation} from "../../store/API/categoriesApi";
import {ICategory} from "../../types/types";
import {useParams} from "react-router-dom";


interface IType {
    categoryId?: number | string
    productId?: number | string
    addCategoryForm?: boolean
    updateCategoryForm?: boolean
    addNewProductForm?: boolean
    updateProductForm?: boolean
}

export const AddAndEditForm: FC<IType> = memo(({
                                                   categoryId,
                                                   productId,
                                                   addCategoryForm,
                                                   updateCategoryForm,
                                                   addNewProductForm,
                                                   updateProductForm,
                                               }) => {
    const {id} = useParams()
    const [file, setFile] = useState<any>()
    const nameInput = useInput('')
    const descriptionInput = useInput('')
    const priceInput = useInput('')
    const [addNewCategory, {error}] = useCreateNewCategoryMutation()
    const [updateCategory] = useUpdateCategoryMutation()
    const [addNewProduct] = useCreateNewProductMutation()
    const [updateProduct] = useUpdateProductMutation()
    const submitHandler = () => {
        if (addCategoryForm) {
            if(nameInput.value ===''){
                nameInput.setError(true)
            } else{
                const formData = new FormData();
                formData.append('title', nameInput.value);
                formData.append('image', file);
                formData.append('userName', 'username');

                addNewCategory(formData);
            }
        }
        if (updateCategoryForm) {
            const formData = new FormData();
            formData.append('title', nameInput.value);
            formData.append('image', file);
            formData.append('userName', 'username');

            updateCategory({
                id:categoryId,
                body:formData
            });
        }
        if (addNewProductForm) {
            if(nameInput.value ==='' || priceInput.value ==='' || descriptionInput.value ==='' || !file){
                nameInput.value ==='' && nameInput.setError(true)
                priceInput.value ==='' && priceInput.setError(true)
                descriptionInput.value ==='' && descriptionInput.setError(true)
            }else{
                const formData = new FormData();
                formData.append('title', nameInput.value);
                formData.append('price', priceInput.value);
                formData.append('image', file);
                formData.append('userName', 'username');
                formData.append('description', descriptionInput.value);
                formData.append("favourites", 'true');
                formData.append("categoryId", `${categoryId}`);

                addNewProduct(formData);
            }
        }
        if (updateProductForm) {
            const formData = new FormData();
            formData.append('title', nameInput.value);
            formData.append('price', priceInput.value);
            formData.append('image', file);
            formData.append('userName', 'username');
            formData.append('description', descriptionInput.value);
            formData.append("favourites", 'true');

            updateProduct({
                id:productId,
                body:formData
            });
        }
    }
    return (
        <form className={classes.addAndEditForm}>
            {
                (addCategoryForm || updateCategoryForm) &&
                <>
                    <Input label={'Изображение'} type={'file'} onChangeFile={setFile} error={!file}/>
                    <Input label={'Название'} onChange={nameInput.onChange} value={nameInput.value} error={nameInput.error}/>
                </>
            }
            {
                (addNewProductForm || updateProductForm) &&
                <>
                    <Input label={'Изображение'} type={'file'} onChangeFile={setFile} error={!file}/>
                    <Input label={'Название'} onChange={nameInput.onChange} value={nameInput.value} error={nameInput.error}/>
                    <Input label={'Описание'} onChange={descriptionInput.onChange} value={descriptionInput.value}error={descriptionInput.error}/>
                    <Input label={'Цена'} onChange={priceInput.onChange} value={priceInput.value}error={priceInput.error}/>
                </>
            }

            <Button onClick={submitHandler}>Сохранить</Button>
        </form>
    )
}) 
