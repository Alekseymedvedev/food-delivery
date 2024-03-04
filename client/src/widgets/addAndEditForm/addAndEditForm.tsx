import React, {FC, memo, useEffect, useState} from "react";
import classes from './addAndEditForm.module.scss'
import {TextField} from "../../shared/textField/textField";
import {Button} from "../../shared/button/button";
import {useInput} from "../../hooks/useInput";
import {useCreateNewProductMutation, useUpdateProductMutation} from "../../store/API/productsApi";
import {
    useCreateNewCategoryMutation,
    useGetCategoriesQuery,
    useUpdateCategoryMutation
} from "../../store/API/categoriesApi";
import {ICategory, IProduct} from "../../types/types";
import {useAppSelector} from "../../hooks/useRedux";
import {createPortal} from "react-dom";
import {Modal} from "../../entities/modal/modal";
import {InputRadio} from "../../shared/inputRadio/inputRadio";
import {useInputRadio} from "../../hooks/useInputRadio";


interface IType {
    categoryId?: number | string
    categoryData?: ICategory
    productId?: number | string
    productData?: IProduct
    addCategoryForm?: boolean
    updateCategoryForm?: boolean
    addNewProductForm?: boolean
    updateProductForm?: boolean
}

export const AddAndEditForm: FC<IType> = ({
                                              categoryId,
                                              categoryData,
                                              productId,
                                              productData,
                                              addCategoryForm,
                                              updateCategoryForm,
                                              addNewProductForm,
                                              updateProductForm,
                                          }) => {
    const {data: dataCategories, error: dataError} = useGetCategoriesQuery('')
    const [textModal, setTextModal] = useState('')
    const {user} = useAppSelector((state) => state.userReducer);
    const [select, setSelect] = useState('')
    const [disabledProduct, setDisabledProduct] = useState(true)

    const [file, setFile] = useState<any>()
    const nameInput = useInput(categoryData ? categoryData?.title : productData ? productData?.title : '')
    const descriptionInput = useInput(productData ? productData?.description : '')
    const priceInput = useInput(productData ? productData?.price : '')

    const [addNewCategory, {
        error: errorAddNewCategory,
        isLoading: isLoadingCreateCategory
    }] = useCreateNewCategoryMutation()
    const [updateCategory, {
        error: errorUpdateCategory,
        isLoading: isLoadingUpdateCategory
    }] = useUpdateCategoryMutation()
    const [addNewProduct, {
        error: errorAddNewProduct,
        isLoading: isLoadingCreateProduct
    }] = useCreateNewProductMutation()
    const [updateProduct,
        {error: errorUpdateProduct, isLoading: isLoadingUpdateProduct}] = useUpdateProductMutation()
    useEffect(() => {
        if (errorAddNewCategory && !isLoadingCreateCategory) {
            console.log(errorAddNewCategory)
            setTextModal('Ошибка при добавлении категории',)
        } else if (isLoadingCreateCategory) {
            setTextModal('Категория успешно добавлена')
        }
    }, [errorAddNewCategory, isLoadingCreateCategory]);
    useEffect(() => {
        if (errorUpdateCategory && !isLoadingUpdateCategory) {
            setTextModal('Ошибка при редактировании категории')
        } else if(isLoadingUpdateCategory) {
            setTextModal('Категория успешно обновлена')
        }
    }, [isLoadingUpdateCategory,errorUpdateCategory]);
    useEffect(() => {
        if (errorAddNewProduct && !isLoadingCreateProduct) {
            setTextModal('Ошибка при добавлении блюда')
        } else if(isLoadingCreateProduct){
            setTextModal('Блюдо успешно добавлено')
        }
    }, [isLoadingCreateProduct,errorAddNewProduct]);
    useEffect(() => {
        if (errorUpdateProduct && !isLoadingUpdateProduct) {
            setTextModal('Ошибка при редактировании блюда')
        } else if(isLoadingUpdateProduct){
            setTextModal('Блюдо успешно обновлено')
        }
    }, [isLoadingUpdateProduct,errorUpdateProduct]);

    const submitHandler = async () => {
        if (addCategoryForm) {
            if (nameInput.value === '' || !file) {
                nameInput.setError(true)
            } else {
                const formData = new FormData();
                formData.append('title', nameInput.value);
                formData.append('image', file);
                formData.append('userName', user?.username ? user?.username : '');

                addNewCategory(formData)
            }
        }
        if (updateCategoryForm) {
            const formData = new FormData();
            nameInput.value && formData.append('title', nameInput.value);
            file && formData.append('image', file);
            formData.append('userName', user?.name ? user?.name : '');

            updateCategory({id: categoryId, body: formData})
        }

        if (addNewProductForm) {
            if (nameInput.value === '' || priceInput.value === '' || descriptionInput.value === '' || !file) {
                nameInput.value === '' && nameInput.setError(true)
                priceInput.value === '' && priceInput.setError(true)
                descriptionInput.value === '' && descriptionInput.setError(true)
            } else {
                const formData = new FormData();
                formData.append('title', nameInput.value);
                formData.append('price', priceInput.value);
                formData.append('image', file);
                formData.append('userName', user?.name ? user?.name : '');
                formData.append('description', descriptionInput.value);
                formData.append("categoryId", `${categoryId}`);
                formData.append("disabled", `${disabledProduct}`);

                addNewProduct(formData)
            }
        }
        if (updateProductForm) {
            const formData = new FormData();
            nameInput.value && formData.append('title', nameInput.value);
            priceInput.value && formData.append('price', priceInput.value);
            file && formData.append('image', file);
            formData.append('userName', user?.name ? user?.name : '');
            descriptionInput.value && formData.append('description', descriptionInput.value);
            select && formData.append("categoryId", select);
            formData.append("disabled", `${disabledProduct}`);

            updateProduct({id: productId, body: formData})
        }
    }
    return (
        <>

            <form className={classes.addAndEditForm}>
                <div className={'mb-4'}>
                    {
                        (addCategoryForm || updateCategoryForm) &&
                        <div className={classes.box}>
                            <TextField label={'Изображение'} type={'file'} onChangeFile={setFile} error={!file}/>
                            <TextField label={'Название'} onChange={nameInput.onChange} value={nameInput.value}
                                       error={nameInput.error}/>
                        </div>
                    }
                    {
                        (addNewProductForm || updateProductForm) &&
                        <div className={classes.box}>
                            <div className={classes.productDisabled}>
                                Отображение в каталоге
                                <InputRadio label={'Не виден'} value={false} onChange={setDisabledProduct}
                                            name={"disabled"}/>
                                <InputRadio label={'Виден'} value={true} onChange={setDisabledProduct}
                                            name={"disabled"}/>

                            </div>
                            <TextField label={'Изображение'} type={'file'} onChangeFile={setFile} error={!file}/>

                            {
                                updateProductForm &&
                                <select value={select} onChange={(e) => setSelect(e.target.value)}>
                                    {
                                        (dataCategories && !dataError) &&
                                        dataCategories.map(item =>
                                            <option key={item.id} value={item.id}>{item.title}</option>
                                        )
                                    }
                                </select>
                            }
                            <TextField label={'Название'} onChange={nameInput.onChange} value={nameInput.value}
                                       error={nameInput.error}/>
                            <TextField label={'Описание'} onChange={descriptionInput.onChange}
                                       value={descriptionInput.value} error={descriptionInput.error} description/>
                            <TextField label={'Цена'} onChange={priceInput.onChange} value={priceInput.value}
                                       error={priceInput.error}/>
                        </div>
                    }
                </div>
                <div className={'mb-4'}>
                    <Button onClick={submitHandler}>Сохранить</Button>
                </div>
            </form>

            {
                textModal && createPortal(
                    <Modal textModal={textModal} onClick={() => setTextModal('')} textBtn={'Закрыть'}/>,
                    document.body
                )
            }
        </>

    )
}
