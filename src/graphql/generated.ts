import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Decimal: any;
  ExpectedErrorType: any;
  GenericScalar: any;
};

/**
 * This is field creates or updates a cart item, based on the quantity and product passed to it
 *
 * Each user can only have unique products in their cart, 2 same products are not allowed. So when you pass same product with different quantity, the product already in the cart gets updated
 */
export type AddCartMutation = {
  __typename?: 'AddCartMutation';
  cartItem?: Maybe<CartItemType>;
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
  __typename?: 'ArchiveAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CartItemType = {
  __typename?: 'CartItemType';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  product: ProductType;
  quantity: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryImageType = {
  __typename?: 'CategoryImageType';
  altText?: Maybe<Scalars['String']>;
  categoryImage?: Maybe<CategoryType>;
  id: Scalars['ID'];
  image: Scalars['String'];
};

export type CategoryType = {
  __typename?: 'CategoryType';
  id: Scalars['ID'];
  image?: Maybe<CategoryImageType>;
  /** Required and unique */
  name?: Maybe<Scalars['String']>;
  products: Array<ProductType>;
  slug: Scalars['String'];
};

/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccount = {
  __typename?: 'DeleteAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DeleteCartMutation = {
  __typename?: 'DeleteCartMutation';
  success?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum FeaturedProductBoxType {
  /** Big */
  Big = 'BIG',
  /** Broken */
  Broken = 'BROKEN',
  /** Normal */
  Normal = 'NORMAL'
}

export type FeaturedProductType = {
  __typename?: 'FeaturedProductType';
  boxType: FeaturedProductBoxType;
  copy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<ProductImageType>;
  product: ProductType;
};

export type GalleryType = {
  __typename?: 'GalleryType';
  first?: Maybe<ProductImageType>;
  id: Scalars['ID'];
  product: ProductType;
  second?: Maybe<ProductImageType>;
  third?: Maybe<ProductImageType>;
};

export type HeroType = {
  __typename?: 'HeroType';
  copy: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<ProductImageType>;
  product: ProductType;
};

export type IncludedType = {
  __typename?: 'IncludedType';
  id: Scalars['ID'];
  item?: Maybe<Scalars['String']>;
  product?: Maybe<ProductType>;
  quantity: Scalars['Int'];
};

export type MiniProductType = {
  __typename?: 'MiniProductType';
  id: Scalars['ID'];
  image?: Maybe<ProductImageType>;
  name?: Maybe<Scalars['String']>;
  others: Array<ProductType>;
  slug?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * This is field creates or updates a cart item, based on the quantity and product passed to it
   *
   * Each user can only have unique products in their cart, 2 same products are not allowed. So when you pass same product with different quantity, the product already in the cart gets updated
   */
  addToCart?: Maybe<AddCartMutation>;
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccount>;
  /**
   * Delete account permanently or make `user.is_active=False`.
   *
   * The behavior is defined on settings.
   * Anyway user refresh tokens are revoked.
   *
   * User must be verified and confirm password.
   */
  deleteAccount?: Maybe<DeleteAccount>;
  deleteFromCart?: Maybe<DeleteCartMutation>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  login?: Maybe<ObtainJsonWebToken>;
  newOrder?: Maybe<NewOrderMutation>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordReset>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshToken>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  removeAllCart?: Maybe<RemoveAllCartMutations>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  verifyToken?: Maybe<VerifyToken>;
};


export type MutationAddToCartArgs = {
  productId: Scalars['String'];
  quantity: Scalars['Int'];
};


export type MutationArchiveAccountArgs = {
  password: Scalars['String'];
};


export type MutationDeleteAccountArgs = {
  password: Scalars['String'];
};


export type MutationDeleteFromCartArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};


export type MutationNewOrderArgs = {
  address: OrderAddressInput;
  paymentMethod: Scalars['String'];
  total: Scalars['Decimal'];
};


export type MutationPasswordChangeArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationPasswordResetArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  token: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  username: Scalars['String'];
};


export type MutationResendActivationEmailArgs = {
  email: Scalars['String'];
};


export type MutationRevokeTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationSendPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};

export type NewOrderMutation = {
  __typename?: 'NewOrderMutation';
  order?: Maybe<OrderType>;
  success?: Maybe<Scalars['Boolean']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  unarchiving?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserNode>;
};

/** Input type for the OrderAddress object. */
export type OrderAddressInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  emailAddress: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  zipcode: Scalars['String'];
};

export type OrderAddressType = {
  __typename?: 'OrderAddressType';
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  emailAddress: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  order: OrderType;
  phoneNumber: Scalars['String'];
  zipcode: Scalars['String'];
};

/** An enumeration. */
export enum OrderProductStatus {
  /** Delivered */
  Delivered = 'DELIVERED',
  /** Shipped */
  Shipped = 'SHIPPED',
  /** Shipping */
  Shipping = 'SHIPPING',
  /** Verifying payment */
  Verifying = 'VERIFYING'
}

export type OrderProductType = {
  __typename?: 'OrderProductType';
  id: Scalars['ID'];
  product?: Maybe<ProductType>;
  quantity: Scalars['Int'];
  status: OrderProductStatus;
};

/** An enumeration. */
export enum OrderStatus {
  /** Delivered */
  Delivered = 'DELIVERED',
  /** Shipped */
  Shipped = 'SHIPPED',
  /** Shipping */
  Shipping = 'SHIPPING',
  /** Verifying payment */
  Verifying = 'VERIFYING'
}

export type OrderType = {
  __typename?: 'OrderType';
  createdAt: Scalars['DateTime'];
  grandTotal: Scalars['Decimal'];
  id: Scalars['ID'];
  orderaddress?: Maybe<OrderAddressType>;
  orderproductSet: Array<OrderProductType>;
  paymentMethod: Scalars['String'];
  status: OrderStatus;
  updatedAt: Scalars['DateTime'];
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordReset = {
  __typename?: 'PasswordReset';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ProductImageType = {
  __typename?: 'ProductImageType';
  altText?: Maybe<Scalars['String']>;
  desktop: Scalars['String'];
  featuredproduct?: Maybe<FeaturedProductType>;
  first?: Maybe<GalleryType>;
  hero?: Maybe<HeroType>;
  id: Scalars['ID'];
  images?: Maybe<ProductType>;
  miniImages?: Maybe<MiniProductType>;
  mobile: Scalars['String'];
  second?: Maybe<GalleryType>;
  tablet: Scalars['String'];
  third?: Maybe<GalleryType>;
};

export type ProductType = {
  __typename?: 'ProductType';
  cartitemSet: Array<CartItemType>;
  category?: Maybe<CategoryType>;
  description?: Maybe<Scalars['String']>;
  featuredproduct?: Maybe<FeaturedProductType>;
  features?: Maybe<Scalars['String']>;
  gallery?: Maybe<GalleryType>;
  hero?: Maybe<HeroType>;
  id: Scalars['ID'];
  image?: Maybe<ProductImageType>;
  includes: Array<IncludedType>;
  /** Required and unique */
  name?: Maybe<Scalars['String']>;
  new: Scalars['Boolean'];
  orderproductSet: Array<OrderProductType>;
  others: Array<MiniProductType>;
  price?: Maybe<Scalars['Decimal']>;
  shortName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Returns all categories */
  allCategories?: Maybe<Array<Maybe<CategoryType>>>;
  /** Returns all Products */
  allProducts?: Maybe<Array<Maybe<ProductType>>>;
  /** Returns specific category */
  categoryBySlug?: Maybe<CategoryType>;
  /** This will return all featured products */
  featuredProducts?: Maybe<Array<Maybe<FeaturedProductType>>>;
  /** The hero section */
  hero?: Maybe<HeroType>;
  me?: Maybe<UserNode>;
  /** get all order related to a user */
  myOrder?: Maybe<Array<Maybe<OrderType>>>;
  /** Get product by Slug */
  productBySlug?: Maybe<ProductType>;
  /** return user cart items */
  userCart?: Maybe<Array<Maybe<CartItemType>>>;
};


export type QueryCategoryBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryProductBySlugArgs = {
  slug: Scalars['String'];
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type RemoveAllCartMutations = {
  __typename?: 'RemoveAllCartMutations';
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: 'SendPasswordResetEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  archived?: Maybe<Scalars['Boolean']>;
  cartitemSet: Array<CartItemType>;
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  orderSet: Array<OrderType>;
  pk?: Maybe<Scalars['Int']>;
  secondaryEmail?: Maybe<Scalars['String']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'Register', success?: boolean | null, refreshToken?: string | null, errors?: any | null, token?: string | null } | null };

export type LoginMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'ObtainJSONWebToken', success?: boolean | null, errors?: any | null, refreshToken?: string | null, token?: string | null } | null };

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken?: { __typename?: 'RefreshToken', success?: boolean | null, errors?: any | null, token?: string | null, refreshToken?: string | null } | null };

export type RevokeTokenMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RevokeTokenMutation = { __typename?: 'Mutation', revokeToken?: { __typename?: 'RevokeToken', success?: boolean | null, errors?: any | null } | null };

export type AddToCartMutationVariables = Exact<{
  productId: Scalars['String'];
  quantity: Scalars['Int'];
}>;


export type AddToCartMutation = { __typename?: 'Mutation', addToCart?: { __typename?: 'AddCartMutation', cartItem?: { __typename?: 'CartItemType', quantity: number } | null } | null };

export type RemoveAllCartMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveAllCartMutation = { __typename?: 'Mutation', removeAllCart?: { __typename?: 'RemoveAllCartMutations', success?: boolean | null } | null };

export type DeleteFromCartMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteFromCartMutation = { __typename?: 'Mutation', deleteFromCart?: { __typename?: 'DeleteCartMutation', success?: boolean | null } | null };

export type NewOrderMutationVariables = Exact<{
  address: OrderAddressInput;
  paymentMethod: Scalars['String'];
  totalPrice: Scalars['Decimal'];
}>;


export type NewOrderMutation = { __typename?: 'Mutation', newOrder?: { __typename?: 'NewOrderMutation', success?: boolean | null, order?: { __typename?: 'OrderType', grandTotal: any, orderproductSet: Array<{ __typename?: 'OrderProductType', id: string, quantity: number, product?: { __typename?: 'ProductType', shortName?: string | null, price?: any | null, image?: { __typename?: 'ProductImageType', desktop: string, altText?: string | null } | null } | null }> } | null } | null };

export type MyCartQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCartQuery = { __typename?: 'Query', userCart?: Array<{ __typename?: 'CartItemType', id: string, quantity: number, createdAt: any, product: { __typename?: 'ProductType', id: string, shortName?: string | null, price?: any | null, image?: { __typename?: 'ProductImageType', desktop: string, altText?: string | null } | null } } | null> | null };

export type GetAllCategorySlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategorySlugsQuery = { __typename?: 'Query', allCategories?: Array<{ __typename?: 'CategoryType', slug: string } | null> | null };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', allCategories?: Array<{ __typename?: 'CategoryType', id: string, name?: string | null, slug: string, image?: { __typename?: 'CategoryImageType', altText?: string | null, image: string } | null } | null> | null };

export type GetSpecificCategoryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetSpecificCategoryQuery = { __typename?: 'Query', categoryBySlug?: { __typename?: 'CategoryType', name?: string | null, slug: string, products: Array<{ __typename?: 'ProductType', id: string, name?: string | null, slug?: string | null, new: boolean, description?: string | null, image?: { __typename?: 'ProductImageType', desktop: string, mobile: string, tablet: string, altText?: string | null } | null }> } | null };

export type MeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryQuery = { __typename?: 'Query', me?: { __typename?: 'UserNode', username: string } | null };

export type GetAllProductSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductSlugsQuery = { __typename?: 'Query', allProducts?: Array<{ __typename?: 'ProductType', slug?: string | null } | null> | null };

export type GetSpecificProductQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetSpecificProductQuery = { __typename?: 'Query', productBySlug?: { __typename?: 'ProductType', id: string, name?: string | null, slug?: string | null, new: boolean, price?: any | null, description?: string | null, features?: string | null, includes: Array<{ __typename?: 'IncludedType', id: string, item?: string | null, quantity: number }>, image?: { __typename?: 'ProductImageType', desktop: string, altText?: string | null, tablet: string, mobile: string } | null, gallery?: { __typename?: 'GalleryType', first?: { __typename?: 'ProductImageType', desktop: string, tablet: string, mobile: string, altText?: string | null } | null, second?: { __typename?: 'ProductImageType', desktop: string, tablet: string, mobile: string, altText?: string | null } | null, third?: { __typename?: 'ProductImageType', desktop: string, tablet: string, mobile: string, altText?: string | null } | null } | null, others: Array<{ __typename?: 'MiniProductType', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'ProductImageType', desktop: string, tablet: string, mobile: string, altText?: string | null } | null }> } | null };


export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password1"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password2"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password1"}}},{"kind":"Argument","name":{"kind":"Name","value":"password2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const RevokeTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RevokeToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}}]}}]}}]} as unknown as DocumentNode<RevokeTokenMutation, RevokeTokenMutationVariables>;
export const AddToCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cartItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]}}]} as unknown as DocumentNode<AddToCartMutation, AddToCartMutationVariables>;
export const RemoveAllCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveAllCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeAllCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<RemoveAllCartMutation, RemoveAllCartMutationVariables>;
export const DeleteFromCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFromCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFromCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<DeleteFromCartMutation, DeleteFromCartMutationVariables>;
export const NewOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderAddressInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethod"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"totalPrice"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethod"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethod"}}},{"kind":"Argument","name":{"kind":"Name","value":"total"},"value":{"kind":"Variable","name":{"kind":"Name","value":"totalPrice"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderproductSet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"desktop"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"}}]}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<NewOrderMutation, NewOrderMutationVariables>;
export const MyCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"desktop"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<MyCartQuery, MyCartQueryVariables>;
export const GetAllCategorySlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllCategorySlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetAllCategorySlugsQuery, GetAllCategorySlugsQueryVariables>;
export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetSpecificCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSpecificCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"new"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"desktop"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"tablet"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetSpecificCategoryQuery, GetSpecificCategoryQueryVariables>;
export const MeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MeQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<MeQueryQuery, MeQueryQueryVariables>;
export const GetAllProductSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllProductSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetAllProductSlugsQuery, GetAllProductSlugsQueryVariables>;
export const GetSpecificProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSpecificProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"new"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"features"}},{"kind":"Field","name":{"kind":"Name","value":"includes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"desktop"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"tablet"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"desktop"}},{"kind":"Field","name":{"kind":"Name","value":"tablet"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"second"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"desktop"}},{"kind":"Field","name":{"kind":"Name","value":"tablet"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"third"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"desktop"}},{"kind":"Field","name":{"kind":"Name","value":"tablet"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"others"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"desktop"}},{"kind":"Field","name":{"kind":"Name","value":"tablet"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSpecificProductQuery, GetSpecificProductQueryVariables>;