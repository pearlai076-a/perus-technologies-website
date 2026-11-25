import type { DataTag, DefinedInitialDataOptions, DefinedUseQueryResult, QueryClient, QueryKey, UndefinedInitialDataOptions, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AdminOverview, Announcement, AnnouncementInput, AnnouncementUpdate, CategoryInput, CategoryUpdate, Download, DownloadInput, DownloadUpdate, Enquiry, EnquiryInput, EnquiryReceipt, EnquiryUpdate, ErrorEnvelope, HealthStatus, ListAdminEnquiriesParams, ListPublicProductsParams, PageContent, PageContentInput, Product, ProductCategory, ProductInput, ProductUpdate, Promotion, PromotionInput, PromotionUpdate, SiteSettings, SiteSettingsUpdate, UploadUrlInput, UploadUrlResponse } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof healthCheck>>, TError, Awaited<ReturnType<typeof healthCheck>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof healthCheck>>, TError, Awaited<ReturnType<typeof healthCheck>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getListPublicProductsUrl: (params?: ListPublicProductsParams) => string;
/**
 * @summary List published products
 */
export declare const listPublicProducts: (params?: ListPublicProductsParams, options?: Parameters<typeof customFetch>[1]) => Promise<Product[]>;
export declare const getListPublicProductsQueryKey: (params?: ListPublicProductsParams) => readonly ["/api/products", ...ListPublicProductsParams[]];
export declare const getListPublicProductsQueryOptions: <TData = Awaited<ReturnType<typeof listPublicProducts>>, TError = ErrorType<unknown>>(params?: ListPublicProductsParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicProducts>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPublicProducts>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ListPublicProductsQueryResult = NonNullable<Awaited<ReturnType<typeof listPublicProducts>>>;
export type ListPublicProductsQueryError = ErrorType<unknown>;
export declare function useListPublicProducts<TData = Awaited<ReturnType<typeof listPublicProducts>>, TError = ErrorType<unknown>>(params: undefined | ListPublicProductsParams, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicProducts>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof listPublicProducts>>, TError, Awaited<ReturnType<typeof listPublicProducts>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListPublicProducts<TData = Awaited<ReturnType<typeof listPublicProducts>>, TError = ErrorType<unknown>>(params?: ListPublicProductsParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicProducts>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof listPublicProducts>>, TError, Awaited<ReturnType<typeof listPublicProducts>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListPublicProducts<TData = Awaited<ReturnType<typeof listPublicProducts>>, TError = ErrorType<unknown>>(params?: ListPublicProductsParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicProducts>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getGetPublicProductUrl: (slug: string) => string;
/**
 * @summary Get a published product
 */
export declare const getPublicProduct: (slug: string, options?: Parameters<typeof customFetch>[1]) => Promise<Product>;
export declare const getGetPublicProductQueryKey: (slug: string) => readonly [`/api/products/${string}`];
export declare const getGetPublicProductQueryOptions: <TData = Awaited<ReturnType<typeof getPublicProduct>>, TError = ErrorType<ErrorEnvelope>>(slug: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublicProduct>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPublicProduct>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetPublicProductQueryResult = NonNullable<Awaited<ReturnType<typeof getPublicProduct>>>;
export type GetPublicProductQueryError = ErrorType<ErrorEnvelope>;
export declare function useGetPublicProduct<TData = Awaited<ReturnType<typeof getPublicProduct>>, TError = ErrorType<ErrorEnvelope>>(slug: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublicProduct>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getPublicProduct>>, TError, Awaited<ReturnType<typeof getPublicProduct>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetPublicProduct<TData = Awaited<ReturnType<typeof getPublicProduct>>, TError = ErrorType<ErrorEnvelope>>(slug: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublicProduct>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getPublicProduct>>, TError, Awaited<ReturnType<typeof getPublicProduct>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetPublicProduct<TData = Awaited<ReturnType<typeof getPublicProduct>>, TError = ErrorType<ErrorEnvelope>>(slug: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublicProduct>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getListPublicCategoriesUrl: () => string;
/**
 * @summary List published product categories
 */
export declare const listPublicCategories: (options?: Parameters<typeof customFetch>[1]) => Promise<ProductCategory[]>;
export declare const getListPublicCategoriesQueryKey: () => readonly ["/api/categories"];
export declare const getListPublicCategoriesQueryOptions: <TData = Awaited<ReturnType<typeof listPublicCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicCategories>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPublicCategories>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ListPublicCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof listPublicCategories>>>;
export type ListPublicCategoriesQueryError = ErrorType<unknown>;
export declare function useListPublicCategories<TData = Awaited<ReturnType<typeof listPublicCategories>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicCategories>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof listPublicCategories>>, TError, Awaited<ReturnType<typeof listPublicCategories>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListPublicCategories<TData = Awaited<ReturnType<typeof listPublicCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicCategories>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof listPublicCategories>>, TError, Awaited<ReturnType<typeof listPublicCategories>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListPublicCategories<TData = Awaited<ReturnType<typeof listPublicCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicCategories>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getListPublicOffersUrl: () => string;
/**
 * @summary List current promotions
 */
export declare const listPublicOffers: (options?: Parameters<typeof customFetch>[1]) => Promise<Promotion[]>;
export declare const getListPublicOffersQueryKey: () => readonly ["/api/offers"];
export declare const getListPublicOffersQueryOptions: <TData = Awaited<ReturnType<typeof listPublicOffers>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicOffers>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPublicOffers>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ListPublicOffersQueryResult = NonNullable<Awaited<ReturnType<typeof listPublicOffers>>>;
export type ListPublicOffersQueryError = ErrorType<unknown>;
export declare function useListPublicOffers<TData = Awaited<ReturnType<typeof listPublicOffers>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicOffers>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof listPublicOffers>>, TError, Awaited<ReturnType<typeof listPublicOffers>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListPublicOffers<TData = Awaited<ReturnType<typeof listPublicOffers>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicOffers>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof listPublicOffers>>, TError, Awaited<ReturnType<typeof listPublicOffers>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListPublicOffers<TData = Awaited<ReturnType<typeof listPublicOffers>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicOffers>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getListPublicDownloadsUrl: () => string;
/**
 * @summary List available downloads
 */
export declare const listPublicDownloads: (options?: Parameters<typeof customFetch>[1]) => Promise<Download[]>;
export declare const getListPublicDownloadsQueryKey: () => readonly ["/api/downloads"];
export declare const getListPublicDownloadsQueryOptions: <TData = Awaited<ReturnType<typeof listPublicDownloads>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicDownloads>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPublicDownloads>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ListPublicDownloadsQueryResult = NonNullable<Awaited<ReturnType<typeof listPublicDownloads>>>;
export type ListPublicDownloadsQueryError = ErrorType<unknown>;
export declare function useListPublicDownloads<TData = Awaited<ReturnType<typeof listPublicDownloads>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicDownloads>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof listPublicDownloads>>, TError, Awaited<ReturnType<typeof listPublicDownloads>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListPublicDownloads<TData = Awaited<ReturnType<typeof listPublicDownloads>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicDownloads>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof listPublicDownloads>>, TError, Awaited<ReturnType<typeof listPublicDownloads>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListPublicDownloads<TData = Awaited<ReturnType<typeof listPublicDownloads>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicDownloads>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getDownloadPublicFileUrl: (id: number) => string;
/**
 * @summary Record and redirect to a published download
 */
export declare const downloadPublicFile: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<unknown>;
export declare const getDownloadPublicFileQueryKey: (id: number) => readonly [`/api/downloads/${number}/download`];
export declare const getDownloadPublicFileQueryOptions: <TData = Awaited<ReturnType<typeof downloadPublicFile>>, TError = ErrorType<void | ErrorEnvelope>>(id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof downloadPublicFile>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof downloadPublicFile>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type DownloadPublicFileQueryResult = NonNullable<Awaited<ReturnType<typeof downloadPublicFile>>>;
export type DownloadPublicFileQueryError = ErrorType<void | ErrorEnvelope>;
export declare function useDownloadPublicFile<TData = Awaited<ReturnType<typeof downloadPublicFile>>, TError = ErrorType<void | ErrorEnvelope>>(id: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof downloadPublicFile>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof downloadPublicFile>>, TError, Awaited<ReturnType<typeof downloadPublicFile>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useDownloadPublicFile<TData = Awaited<ReturnType<typeof downloadPublicFile>>, TError = ErrorType<void | ErrorEnvelope>>(id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof downloadPublicFile>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof downloadPublicFile>>, TError, Awaited<ReturnType<typeof downloadPublicFile>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useDownloadPublicFile<TData = Awaited<ReturnType<typeof downloadPublicFile>>, TError = ErrorType<void | ErrorEnvelope>>(id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof downloadPublicFile>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getListPublicAnnouncementsUrl: () => string;
/**
 * @summary List published announcements
 */
export declare const listPublicAnnouncements: (options?: Parameters<typeof customFetch>[1]) => Promise<Announcement[]>;
export declare const getListPublicAnnouncementsQueryKey: () => readonly ["/api/announcements"];
export declare const getListPublicAnnouncementsQueryOptions: <TData = Awaited<ReturnType<typeof listPublicAnnouncements>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicAnnouncements>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPublicAnnouncements>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ListPublicAnnouncementsQueryResult = NonNullable<Awaited<ReturnType<typeof listPublicAnnouncements>>>;
export type ListPublicAnnouncementsQueryError = ErrorType<unknown>;
export declare function useListPublicAnnouncements<TData = Awaited<ReturnType<typeof listPublicAnnouncements>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicAnnouncements>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof listPublicAnnouncements>>, TError, Awaited<ReturnType<typeof listPublicAnnouncements>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListPublicAnnouncements<TData = Awaited<ReturnType<typeof listPublicAnnouncements>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicAnnouncements>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof listPublicAnnouncements>>, TError, Awaited<ReturnType<typeof listPublicAnnouncements>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListPublicAnnouncements<TData = Awaited<ReturnType<typeof listPublicAnnouncements>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listPublicAnnouncements>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getGetPublicPageUrl: (slug: string) => string;
/**
 * @summary Get a published editable page
 */
export declare const getPublicPage: (slug: string, options?: Parameters<typeof customFetch>[1]) => Promise<PageContent>;
export declare const getGetPublicPageQueryKey: (slug: string) => readonly [`/api/pages/${string}`];
export declare const getGetPublicPageQueryOptions: <TData = Awaited<ReturnType<typeof getPublicPage>>, TError = ErrorType<ErrorEnvelope>>(slug: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublicPage>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPublicPage>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetPublicPageQueryResult = NonNullable<Awaited<ReturnType<typeof getPublicPage>>>;
export type GetPublicPageQueryError = ErrorType<ErrorEnvelope>;
export declare function useGetPublicPage<TData = Awaited<ReturnType<typeof getPublicPage>>, TError = ErrorType<ErrorEnvelope>>(slug: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublicPage>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getPublicPage>>, TError, Awaited<ReturnType<typeof getPublicPage>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetPublicPage<TData = Awaited<ReturnType<typeof getPublicPage>>, TError = ErrorType<ErrorEnvelope>>(slug: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublicPage>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getPublicPage>>, TError, Awaited<ReturnType<typeof getPublicPage>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetPublicPage<TData = Awaited<ReturnType<typeof getPublicPage>>, TError = ErrorType<ErrorEnvelope>>(slug: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublicPage>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getGetPublicSiteSettingsUrl: () => string;
/**
 * @summary Get public company and SEO settings
 */
export declare const getPublicSiteSettings: (options?: Parameters<typeof customFetch>[1]) => Promise<SiteSettings>;
export declare const getGetPublicSiteSettingsQueryKey: () => readonly ["/api/site-settings"];
export declare const getGetPublicSiteSettingsQueryOptions: <TData = Awaited<ReturnType<typeof getPublicSiteSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublicSiteSettings>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPublicSiteSettings>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetPublicSiteSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getPublicSiteSettings>>>;
export type GetPublicSiteSettingsQueryError = ErrorType<unknown>;
export declare function useGetPublicSiteSettings<TData = Awaited<ReturnType<typeof getPublicSiteSettings>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublicSiteSettings>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getPublicSiteSettings>>, TError, Awaited<ReturnType<typeof getPublicSiteSettings>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetPublicSiteSettings<TData = Awaited<ReturnType<typeof getPublicSiteSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublicSiteSettings>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getPublicSiteSettings>>, TError, Awaited<ReturnType<typeof getPublicSiteSettings>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetPublicSiteSettings<TData = Awaited<ReturnType<typeof getPublicSiteSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPublicSiteSettings>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getCreatePublicEnquiryUrl: () => string;
/**
 * Validates and stores the enquiry; any email alert is optional and separately configured.
 * @summary Submit a company enquiry
 */
export declare const createPublicEnquiry: (enquiryInput: EnquiryInput, options?: Parameters<typeof customFetch>[1]) => Promise<EnquiryReceipt>;
export declare const getCreatePublicEnquiryMutationKey: () => readonly ["createPublicEnquiry"];
export declare const getCreatePublicEnquiryMutationOptions: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPublicEnquiry>>, TError, CreatePublicEnquiryMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createPublicEnquiry>>, TError, CreatePublicEnquiryMutationVariables, TContext>;
export type CreatePublicEnquiryMutationResult = NonNullable<Awaited<ReturnType<typeof createPublicEnquiry>>>;
export type CreatePublicEnquiryMutationBody = BodyType<EnquiryInput>;
export type CreatePublicEnquiryMutationError = ErrorType<ErrorEnvelope>;
export type CreatePublicEnquiryMutationVariables = {
    data: BodyType<EnquiryInput>;
};
/**
* @summary Submit a company enquiry
*/
export declare const useCreatePublicEnquiry: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPublicEnquiry>>, TError, CreatePublicEnquiryMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof createPublicEnquiry>>, TError, CreatePublicEnquiryMutationVariables, TContext>;
export declare const getGetAdminOverviewUrl: () => string;
/**
 * @summary Get dashboard totals and recent activity
 */
export declare const getAdminOverview: (options?: Parameters<typeof customFetch>[1]) => Promise<AdminOverview>;
export declare const getGetAdminOverviewQueryKey: () => readonly ["/api/admin/overview"];
export declare const getGetAdminOverviewQueryOptions: <TData = Awaited<ReturnType<typeof getAdminOverview>>, TError = ErrorType<ErrorEnvelope>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAdminOverview>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminOverview>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetAdminOverviewQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminOverview>>>;
export type GetAdminOverviewQueryError = ErrorType<ErrorEnvelope>;
export declare function useGetAdminOverview<TData = Awaited<ReturnType<typeof getAdminOverview>>, TError = ErrorType<ErrorEnvelope>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAdminOverview>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getAdminOverview>>, TError, Awaited<ReturnType<typeof getAdminOverview>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAdminOverview<TData = Awaited<ReturnType<typeof getAdminOverview>>, TError = ErrorType<ErrorEnvelope>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAdminOverview>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getAdminOverview>>, TError, Awaited<ReturnType<typeof getAdminOverview>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAdminOverview<TData = Awaited<ReturnType<typeof getAdminOverview>>, TError = ErrorType<ErrorEnvelope>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAdminOverview>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getListAdminProductsUrl: () => string;
/**
 * @summary List all products for management
 */
export declare const listAdminProducts: (options?: Parameters<typeof customFetch>[1]) => Promise<Product[]>;
export declare const getListAdminProductsQueryKey: () => readonly ["/api/admin/products"];
export declare const getListAdminProductsQueryOptions: <TData = Awaited<ReturnType<typeof listAdminProducts>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminProducts>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAdminProducts>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ListAdminProductsQueryResult = NonNullable<Awaited<ReturnType<typeof listAdminProducts>>>;
export type ListAdminProductsQueryError = ErrorType<unknown>;
export declare function useListAdminProducts<TData = Awaited<ReturnType<typeof listAdminProducts>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminProducts>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminProducts>>, TError, Awaited<ReturnType<typeof listAdminProducts>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminProducts<TData = Awaited<ReturnType<typeof listAdminProducts>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminProducts>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminProducts>>, TError, Awaited<ReturnType<typeof listAdminProducts>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminProducts<TData = Awaited<ReturnType<typeof listAdminProducts>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminProducts>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getCreateAdminProductUrl: () => string;
/**
 * @summary Create a product
 */
export declare const createAdminProduct: (productInput: ProductInput, options?: Parameters<typeof customFetch>[1]) => Promise<Product>;
export declare const getCreateAdminProductMutationKey: () => readonly ["createAdminProduct"];
export declare const getCreateAdminProductMutationOptions: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminProduct>>, TError, CreateAdminProductMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAdminProduct>>, TError, CreateAdminProductMutationVariables, TContext>;
export type CreateAdminProductMutationResult = NonNullable<Awaited<ReturnType<typeof createAdminProduct>>>;
export type CreateAdminProductMutationBody = BodyType<ProductInput>;
export type CreateAdminProductMutationError = ErrorType<ErrorEnvelope>;
export type CreateAdminProductMutationVariables = {
    data: BodyType<ProductInput>;
};
/**
* @summary Create a product
*/
export declare const useCreateAdminProduct: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminProduct>>, TError, CreateAdminProductMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof createAdminProduct>>, TError, CreateAdminProductMutationVariables, TContext>;
export declare const getUpdateAdminProductUrl: (id: number) => string;
/**
 * @summary Update a product
 */
export declare const updateAdminProduct: (id: number, productUpdate: ProductUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<Product>;
export declare const getUpdateAdminProductMutationKey: () => readonly ["updateAdminProduct"];
export declare const getUpdateAdminProductMutationOptions: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminProduct>>, TError, UpdateAdminProductMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminProduct>>, TError, UpdateAdminProductMutationVariables, TContext>;
export type UpdateAdminProductMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminProduct>>>;
export type UpdateAdminProductMutationBody = BodyType<ProductUpdate>;
export type UpdateAdminProductMutationError = ErrorType<ErrorEnvelope>;
export type UpdateAdminProductMutationVariables = {
    id: number;
    data: BodyType<ProductUpdate>;
};
/**
* @summary Update a product
*/
export declare const useUpdateAdminProduct: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminProduct>>, TError, UpdateAdminProductMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof updateAdminProduct>>, TError, UpdateAdminProductMutationVariables, TContext>;
export declare const getDeleteAdminProductUrl: (id: number) => string;
/**
 * @summary Delete a product
 */
export declare const deleteAdminProduct: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<void>;
export declare const getDeleteAdminProductMutationKey: () => readonly ["deleteAdminProduct"];
export declare const getDeleteAdminProductMutationOptions: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminProduct>>, TError, DeleteAdminProductMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAdminProduct>>, TError, DeleteAdminProductMutationVariables, TContext>;
export type DeleteAdminProductMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAdminProduct>>>;
export type DeleteAdminProductMutationError = ErrorType<ErrorEnvelope>;
export type DeleteAdminProductMutationVariables = {
    id: number;
};
/**
* @summary Delete a product
*/
export declare const useDeleteAdminProduct: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminProduct>>, TError, DeleteAdminProductMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof deleteAdminProduct>>, TError, DeleteAdminProductMutationVariables, TContext>;
export declare const getListAdminCategoriesUrl: () => string;
/**
 * @summary List product categories
 */
export declare const listAdminCategories: (options?: Parameters<typeof customFetch>[1]) => Promise<ProductCategory[]>;
export declare const getListAdminCategoriesQueryKey: () => readonly ["/api/admin/categories"];
export declare const getListAdminCategoriesQueryOptions: <TData = Awaited<ReturnType<typeof listAdminCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminCategories>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAdminCategories>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ListAdminCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof listAdminCategories>>>;
export type ListAdminCategoriesQueryError = ErrorType<unknown>;
export declare function useListAdminCategories<TData = Awaited<ReturnType<typeof listAdminCategories>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminCategories>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminCategories>>, TError, Awaited<ReturnType<typeof listAdminCategories>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminCategories<TData = Awaited<ReturnType<typeof listAdminCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminCategories>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminCategories>>, TError, Awaited<ReturnType<typeof listAdminCategories>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminCategories<TData = Awaited<ReturnType<typeof listAdminCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminCategories>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getCreateAdminCategoryUrl: () => string;
/**
 * @summary Create a product category
 */
export declare const createAdminCategory: (categoryInput: CategoryInput, options?: Parameters<typeof customFetch>[1]) => Promise<ProductCategory>;
export declare const getCreateAdminCategoryMutationKey: () => readonly ["createAdminCategory"];
export declare const getCreateAdminCategoryMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminCategory>>, TError, CreateAdminCategoryMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAdminCategory>>, TError, CreateAdminCategoryMutationVariables, TContext>;
export type CreateAdminCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof createAdminCategory>>>;
export type CreateAdminCategoryMutationBody = BodyType<CategoryInput>;
export type CreateAdminCategoryMutationError = ErrorType<unknown>;
export type CreateAdminCategoryMutationVariables = {
    data: BodyType<CategoryInput>;
};
/**
* @summary Create a product category
*/
export declare const useCreateAdminCategory: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminCategory>>, TError, CreateAdminCategoryMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof createAdminCategory>>, TError, CreateAdminCategoryMutationVariables, TContext>;
export declare const getUpdateAdminCategoryUrl: (id: number) => string;
/**
 * @summary Update a product category
 */
export declare const updateAdminCategory: (id: number, categoryUpdate: CategoryUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<ProductCategory>;
export declare const getUpdateAdminCategoryMutationKey: () => readonly ["updateAdminCategory"];
export declare const getUpdateAdminCategoryMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminCategory>>, TError, UpdateAdminCategoryMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminCategory>>, TError, UpdateAdminCategoryMutationVariables, TContext>;
export type UpdateAdminCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminCategory>>>;
export type UpdateAdminCategoryMutationBody = BodyType<CategoryUpdate>;
export type UpdateAdminCategoryMutationError = ErrorType<unknown>;
export type UpdateAdminCategoryMutationVariables = {
    id: number;
    data: BodyType<CategoryUpdate>;
};
/**
* @summary Update a product category
*/
export declare const useUpdateAdminCategory: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminCategory>>, TError, UpdateAdminCategoryMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof updateAdminCategory>>, TError, UpdateAdminCategoryMutationVariables, TContext>;
export declare const getDeleteAdminCategoryUrl: (id: number) => string;
/**
 * @summary Delete a product category
 */
export declare const deleteAdminCategory: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<void>;
export declare const getDeleteAdminCategoryMutationKey: () => readonly ["deleteAdminCategory"];
export declare const getDeleteAdminCategoryMutationOptions: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminCategory>>, TError, DeleteAdminCategoryMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAdminCategory>>, TError, DeleteAdminCategoryMutationVariables, TContext>;
export type DeleteAdminCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAdminCategory>>>;
export type DeleteAdminCategoryMutationError = ErrorType<ErrorEnvelope>;
export type DeleteAdminCategoryMutationVariables = {
    id: number;
};
/**
* @summary Delete a product category
*/
export declare const useDeleteAdminCategory: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminCategory>>, TError, DeleteAdminCategoryMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof deleteAdminCategory>>, TError, DeleteAdminCategoryMutationVariables, TContext>;
export declare const getListAdminPromotionsUrl: () => string;
/**
 * @summary List all promotions
 */
export declare const listAdminPromotions: (options?: Parameters<typeof customFetch>[1]) => Promise<Promotion[]>;
export declare const getListAdminPromotionsQueryKey: () => readonly ["/api/admin/promotions"];
export declare const getListAdminPromotionsQueryOptions: <TData = Awaited<ReturnType<typeof listAdminPromotions>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminPromotions>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAdminPromotions>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ListAdminPromotionsQueryResult = NonNullable<Awaited<ReturnType<typeof listAdminPromotions>>>;
export type ListAdminPromotionsQueryError = ErrorType<unknown>;
export declare function useListAdminPromotions<TData = Awaited<ReturnType<typeof listAdminPromotions>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminPromotions>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminPromotions>>, TError, Awaited<ReturnType<typeof listAdminPromotions>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminPromotions<TData = Awaited<ReturnType<typeof listAdminPromotions>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminPromotions>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminPromotions>>, TError, Awaited<ReturnType<typeof listAdminPromotions>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminPromotions<TData = Awaited<ReturnType<typeof listAdminPromotions>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminPromotions>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getCreateAdminPromotionUrl: () => string;
/**
 * @summary Create a promotion
 */
export declare const createAdminPromotion: (promotionInput: PromotionInput, options?: Parameters<typeof customFetch>[1]) => Promise<Promotion>;
export declare const getCreateAdminPromotionMutationKey: () => readonly ["createAdminPromotion"];
export declare const getCreateAdminPromotionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminPromotion>>, TError, CreateAdminPromotionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAdminPromotion>>, TError, CreateAdminPromotionMutationVariables, TContext>;
export type CreateAdminPromotionMutationResult = NonNullable<Awaited<ReturnType<typeof createAdminPromotion>>>;
export type CreateAdminPromotionMutationBody = BodyType<PromotionInput>;
export type CreateAdminPromotionMutationError = ErrorType<unknown>;
export type CreateAdminPromotionMutationVariables = {
    data: BodyType<PromotionInput>;
};
/**
* @summary Create a promotion
*/
export declare const useCreateAdminPromotion: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminPromotion>>, TError, CreateAdminPromotionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof createAdminPromotion>>, TError, CreateAdminPromotionMutationVariables, TContext>;
export declare const getUpdateAdminPromotionUrl: (id: number) => string;
/**
 * @summary Update a promotion
 */
export declare const updateAdminPromotion: (id: number, promotionUpdate: PromotionUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<Promotion>;
export declare const getUpdateAdminPromotionMutationKey: () => readonly ["updateAdminPromotion"];
export declare const getUpdateAdminPromotionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminPromotion>>, TError, UpdateAdminPromotionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminPromotion>>, TError, UpdateAdminPromotionMutationVariables, TContext>;
export type UpdateAdminPromotionMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminPromotion>>>;
export type UpdateAdminPromotionMutationBody = BodyType<PromotionUpdate>;
export type UpdateAdminPromotionMutationError = ErrorType<unknown>;
export type UpdateAdminPromotionMutationVariables = {
    id: number;
    data: BodyType<PromotionUpdate>;
};
/**
* @summary Update a promotion
*/
export declare const useUpdateAdminPromotion: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminPromotion>>, TError, UpdateAdminPromotionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof updateAdminPromotion>>, TError, UpdateAdminPromotionMutationVariables, TContext>;
export declare const getDeleteAdminPromotionUrl: (id: number) => string;
/**
 * @summary Delete a promotion
 */
export declare const deleteAdminPromotion: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<void>;
export declare const getDeleteAdminPromotionMutationKey: () => readonly ["deleteAdminPromotion"];
export declare const getDeleteAdminPromotionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminPromotion>>, TError, DeleteAdminPromotionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAdminPromotion>>, TError, DeleteAdminPromotionMutationVariables, TContext>;
export type DeleteAdminPromotionMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAdminPromotion>>>;
export type DeleteAdminPromotionMutationError = ErrorType<unknown>;
export type DeleteAdminPromotionMutationVariables = {
    id: number;
};
/**
* @summary Delete a promotion
*/
export declare const useDeleteAdminPromotion: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminPromotion>>, TError, DeleteAdminPromotionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof deleteAdminPromotion>>, TError, DeleteAdminPromotionMutationVariables, TContext>;
export declare const getListAdminDownloadsUrl: () => string;
/**
 * @summary List all managed downloads
 */
export declare const listAdminDownloads: (options?: Parameters<typeof customFetch>[1]) => Promise<Download[]>;
export declare const getListAdminDownloadsQueryKey: () => readonly ["/api/admin/downloads"];
export declare const getListAdminDownloadsQueryOptions: <TData = Awaited<ReturnType<typeof listAdminDownloads>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminDownloads>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAdminDownloads>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ListAdminDownloadsQueryResult = NonNullable<Awaited<ReturnType<typeof listAdminDownloads>>>;
export type ListAdminDownloadsQueryError = ErrorType<unknown>;
export declare function useListAdminDownloads<TData = Awaited<ReturnType<typeof listAdminDownloads>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminDownloads>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminDownloads>>, TError, Awaited<ReturnType<typeof listAdminDownloads>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminDownloads<TData = Awaited<ReturnType<typeof listAdminDownloads>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminDownloads>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminDownloads>>, TError, Awaited<ReturnType<typeof listAdminDownloads>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminDownloads<TData = Awaited<ReturnType<typeof listAdminDownloads>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminDownloads>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getCreateAdminDownloadUrl: () => string;
/**
 * @summary Create a download record
 */
export declare const createAdminDownload: (downloadInput: DownloadInput, options?: Parameters<typeof customFetch>[1]) => Promise<Download>;
export declare const getCreateAdminDownloadMutationKey: () => readonly ["createAdminDownload"];
export declare const getCreateAdminDownloadMutationOptions: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminDownload>>, TError, CreateAdminDownloadMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAdminDownload>>, TError, CreateAdminDownloadMutationVariables, TContext>;
export type CreateAdminDownloadMutationResult = NonNullable<Awaited<ReturnType<typeof createAdminDownload>>>;
export type CreateAdminDownloadMutationBody = BodyType<DownloadInput>;
export type CreateAdminDownloadMutationError = ErrorType<ErrorEnvelope>;
export type CreateAdminDownloadMutationVariables = {
    data: BodyType<DownloadInput>;
};
/**
* @summary Create a download record
*/
export declare const useCreateAdminDownload: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminDownload>>, TError, CreateAdminDownloadMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof createAdminDownload>>, TError, CreateAdminDownloadMutationVariables, TContext>;
export declare const getUpdateAdminDownloadUrl: (id: number) => string;
/**
 * @summary Update a download
 */
export declare const updateAdminDownload: (id: number, downloadUpdate: DownloadUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<Download>;
export declare const getUpdateAdminDownloadMutationKey: () => readonly ["updateAdminDownload"];
export declare const getUpdateAdminDownloadMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminDownload>>, TError, UpdateAdminDownloadMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminDownload>>, TError, UpdateAdminDownloadMutationVariables, TContext>;
export type UpdateAdminDownloadMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminDownload>>>;
export type UpdateAdminDownloadMutationBody = BodyType<DownloadUpdate>;
export type UpdateAdminDownloadMutationError = ErrorType<unknown>;
export type UpdateAdminDownloadMutationVariables = {
    id: number;
    data: BodyType<DownloadUpdate>;
};
/**
* @summary Update a download
*/
export declare const useUpdateAdminDownload: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminDownload>>, TError, UpdateAdminDownloadMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof updateAdminDownload>>, TError, UpdateAdminDownloadMutationVariables, TContext>;
export declare const getDeleteAdminDownloadUrl: (id: number) => string;
/**
 * @summary Delete a download record
 */
export declare const deleteAdminDownload: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<void>;
export declare const getDeleteAdminDownloadMutationKey: () => readonly ["deleteAdminDownload"];
export declare const getDeleteAdminDownloadMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminDownload>>, TError, DeleteAdminDownloadMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAdminDownload>>, TError, DeleteAdminDownloadMutationVariables, TContext>;
export type DeleteAdminDownloadMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAdminDownload>>>;
export type DeleteAdminDownloadMutationError = ErrorType<unknown>;
export type DeleteAdminDownloadMutationVariables = {
    id: number;
};
/**
* @summary Delete a download record
*/
export declare const useDeleteAdminDownload: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminDownload>>, TError, DeleteAdminDownloadMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof deleteAdminDownload>>, TError, DeleteAdminDownloadMutationVariables, TContext>;
export declare const getListAdminAnnouncementsUrl: () => string;
/**
 * @summary List all announcements
 */
export declare const listAdminAnnouncements: (options?: Parameters<typeof customFetch>[1]) => Promise<Announcement[]>;
export declare const getListAdminAnnouncementsQueryKey: () => readonly ["/api/admin/announcements"];
export declare const getListAdminAnnouncementsQueryOptions: <TData = Awaited<ReturnType<typeof listAdminAnnouncements>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminAnnouncements>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAdminAnnouncements>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ListAdminAnnouncementsQueryResult = NonNullable<Awaited<ReturnType<typeof listAdminAnnouncements>>>;
export type ListAdminAnnouncementsQueryError = ErrorType<unknown>;
export declare function useListAdminAnnouncements<TData = Awaited<ReturnType<typeof listAdminAnnouncements>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminAnnouncements>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminAnnouncements>>, TError, Awaited<ReturnType<typeof listAdminAnnouncements>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminAnnouncements<TData = Awaited<ReturnType<typeof listAdminAnnouncements>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminAnnouncements>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminAnnouncements>>, TError, Awaited<ReturnType<typeof listAdminAnnouncements>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminAnnouncements<TData = Awaited<ReturnType<typeof listAdminAnnouncements>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminAnnouncements>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getCreateAdminAnnouncementUrl: () => string;
/**
 * @summary Create an announcement
 */
export declare const createAdminAnnouncement: (announcementInput: AnnouncementInput, options?: Parameters<typeof customFetch>[1]) => Promise<Announcement>;
export declare const getCreateAdminAnnouncementMutationKey: () => readonly ["createAdminAnnouncement"];
export declare const getCreateAdminAnnouncementMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminAnnouncement>>, TError, CreateAdminAnnouncementMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAdminAnnouncement>>, TError, CreateAdminAnnouncementMutationVariables, TContext>;
export type CreateAdminAnnouncementMutationResult = NonNullable<Awaited<ReturnType<typeof createAdminAnnouncement>>>;
export type CreateAdminAnnouncementMutationBody = BodyType<AnnouncementInput>;
export type CreateAdminAnnouncementMutationError = ErrorType<unknown>;
export type CreateAdminAnnouncementMutationVariables = {
    data: BodyType<AnnouncementInput>;
};
/**
* @summary Create an announcement
*/
export declare const useCreateAdminAnnouncement: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminAnnouncement>>, TError, CreateAdminAnnouncementMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof createAdminAnnouncement>>, TError, CreateAdminAnnouncementMutationVariables, TContext>;
export declare const getUpdateAdminAnnouncementUrl: (id: number) => string;
/**
 * @summary Update an announcement
 */
export declare const updateAdminAnnouncement: (id: number, announcementUpdate: AnnouncementUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<Announcement>;
export declare const getUpdateAdminAnnouncementMutationKey: () => readonly ["updateAdminAnnouncement"];
export declare const getUpdateAdminAnnouncementMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminAnnouncement>>, TError, UpdateAdminAnnouncementMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminAnnouncement>>, TError, UpdateAdminAnnouncementMutationVariables, TContext>;
export type UpdateAdminAnnouncementMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminAnnouncement>>>;
export type UpdateAdminAnnouncementMutationBody = BodyType<AnnouncementUpdate>;
export type UpdateAdminAnnouncementMutationError = ErrorType<unknown>;
export type UpdateAdminAnnouncementMutationVariables = {
    id: number;
    data: BodyType<AnnouncementUpdate>;
};
/**
* @summary Update an announcement
*/
export declare const useUpdateAdminAnnouncement: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminAnnouncement>>, TError, UpdateAdminAnnouncementMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof updateAdminAnnouncement>>, TError, UpdateAdminAnnouncementMutationVariables, TContext>;
export declare const getDeleteAdminAnnouncementUrl: (id: number) => string;
/**
 * @summary Delete an announcement
 */
export declare const deleteAdminAnnouncement: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<void>;
export declare const getDeleteAdminAnnouncementMutationKey: () => readonly ["deleteAdminAnnouncement"];
export declare const getDeleteAdminAnnouncementMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminAnnouncement>>, TError, DeleteAdminAnnouncementMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAdminAnnouncement>>, TError, DeleteAdminAnnouncementMutationVariables, TContext>;
export type DeleteAdminAnnouncementMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAdminAnnouncement>>>;
export type DeleteAdminAnnouncementMutationError = ErrorType<unknown>;
export type DeleteAdminAnnouncementMutationVariables = {
    id: number;
};
/**
* @summary Delete an announcement
*/
export declare const useDeleteAdminAnnouncement: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminAnnouncement>>, TError, DeleteAdminAnnouncementMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof deleteAdminAnnouncement>>, TError, DeleteAdminAnnouncementMutationVariables, TContext>;
export declare const getListAdminPagesUrl: () => string;
/**
 * @summary List editable pages and sections
 */
export declare const listAdminPages: (options?: Parameters<typeof customFetch>[1]) => Promise<PageContent[]>;
export declare const getListAdminPagesQueryKey: () => readonly ["/api/admin/content"];
export declare const getListAdminPagesQueryOptions: <TData = Awaited<ReturnType<typeof listAdminPages>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminPages>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAdminPages>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ListAdminPagesQueryResult = NonNullable<Awaited<ReturnType<typeof listAdminPages>>>;
export type ListAdminPagesQueryError = ErrorType<unknown>;
export declare function useListAdminPages<TData = Awaited<ReturnType<typeof listAdminPages>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminPages>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminPages>>, TError, Awaited<ReturnType<typeof listAdminPages>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminPages<TData = Awaited<ReturnType<typeof listAdminPages>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminPages>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminPages>>, TError, Awaited<ReturnType<typeof listAdminPages>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminPages<TData = Awaited<ReturnType<typeof listAdminPages>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminPages>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getUpdateAdminPageUrl: (slug: string) => string;
/**
 * @summary Create or update a page's content
 */
export declare const updateAdminPage: (slug: string, pageContentInput: PageContentInput, options?: Parameters<typeof customFetch>[1]) => Promise<PageContent>;
export declare const getUpdateAdminPageMutationKey: () => readonly ["updateAdminPage"];
export declare const getUpdateAdminPageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminPage>>, TError, UpdateAdminPageMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminPage>>, TError, UpdateAdminPageMutationVariables, TContext>;
export type UpdateAdminPageMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminPage>>>;
export type UpdateAdminPageMutationBody = BodyType<PageContentInput>;
export type UpdateAdminPageMutationError = ErrorType<unknown>;
export type UpdateAdminPageMutationVariables = {
    slug: string;
    data: BodyType<PageContentInput>;
};
/**
* @summary Create or update a page's content
*/
export declare const useUpdateAdminPage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminPage>>, TError, UpdateAdminPageMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof updateAdminPage>>, TError, UpdateAdminPageMutationVariables, TContext>;
export declare const getListAdminEnquiriesUrl: (params?: ListAdminEnquiriesParams) => string;
/**
 * @summary List and filter enquiries
 */
export declare const listAdminEnquiries: (params?: ListAdminEnquiriesParams, options?: Parameters<typeof customFetch>[1]) => Promise<Enquiry[]>;
export declare const getListAdminEnquiriesQueryKey: (params?: ListAdminEnquiriesParams) => readonly ["/api/admin/enquiries", ...ListAdminEnquiriesParams[]];
export declare const getListAdminEnquiriesQueryOptions: <TData = Awaited<ReturnType<typeof listAdminEnquiries>>, TError = ErrorType<unknown>>(params?: ListAdminEnquiriesParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminEnquiries>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAdminEnquiries>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ListAdminEnquiriesQueryResult = NonNullable<Awaited<ReturnType<typeof listAdminEnquiries>>>;
export type ListAdminEnquiriesQueryError = ErrorType<unknown>;
export declare function useListAdminEnquiries<TData = Awaited<ReturnType<typeof listAdminEnquiries>>, TError = ErrorType<unknown>>(params: undefined | ListAdminEnquiriesParams, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminEnquiries>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminEnquiries>>, TError, Awaited<ReturnType<typeof listAdminEnquiries>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminEnquiries<TData = Awaited<ReturnType<typeof listAdminEnquiries>>, TError = ErrorType<unknown>>(params?: ListAdminEnquiriesParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminEnquiries>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof listAdminEnquiries>>, TError, Awaited<ReturnType<typeof listAdminEnquiries>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useListAdminEnquiries<TData = Awaited<ReturnType<typeof listAdminEnquiries>>, TError = ErrorType<unknown>>(params?: ListAdminEnquiriesParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listAdminEnquiries>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getGetAdminEnquiryUrl: (id: number) => string;
/**
 * @summary Get an enquiry's details
 */
export declare const getAdminEnquiry: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<Enquiry>;
export declare const getGetAdminEnquiryQueryKey: (id: number) => readonly [`/api/admin/enquiries/${number}`];
export declare const getGetAdminEnquiryQueryOptions: <TData = Awaited<ReturnType<typeof getAdminEnquiry>>, TError = ErrorType<ErrorEnvelope>>(id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAdminEnquiry>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminEnquiry>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetAdminEnquiryQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminEnquiry>>>;
export type GetAdminEnquiryQueryError = ErrorType<ErrorEnvelope>;
export declare function useGetAdminEnquiry<TData = Awaited<ReturnType<typeof getAdminEnquiry>>, TError = ErrorType<ErrorEnvelope>>(id: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAdminEnquiry>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getAdminEnquiry>>, TError, Awaited<ReturnType<typeof getAdminEnquiry>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAdminEnquiry<TData = Awaited<ReturnType<typeof getAdminEnquiry>>, TError = ErrorType<ErrorEnvelope>>(id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAdminEnquiry>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getAdminEnquiry>>, TError, Awaited<ReturnType<typeof getAdminEnquiry>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAdminEnquiry<TData = Awaited<ReturnType<typeof getAdminEnquiry>>, TError = ErrorType<ErrorEnvelope>>(id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAdminEnquiry>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getUpdateAdminEnquiryUrl: (id: number) => string;
/**
 * @summary Update enquiry status or internal note
 */
export declare const updateAdminEnquiry: (id: number, enquiryUpdate: EnquiryUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<Enquiry>;
export declare const getUpdateAdminEnquiryMutationKey: () => readonly ["updateAdminEnquiry"];
export declare const getUpdateAdminEnquiryMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminEnquiry>>, TError, UpdateAdminEnquiryMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminEnquiry>>, TError, UpdateAdminEnquiryMutationVariables, TContext>;
export type UpdateAdminEnquiryMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminEnquiry>>>;
export type UpdateAdminEnquiryMutationBody = BodyType<EnquiryUpdate>;
export type UpdateAdminEnquiryMutationError = ErrorType<unknown>;
export type UpdateAdminEnquiryMutationVariables = {
    id: number;
    data: BodyType<EnquiryUpdate>;
};
/**
* @summary Update enquiry status or internal note
*/
export declare const useUpdateAdminEnquiry: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminEnquiry>>, TError, UpdateAdminEnquiryMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof updateAdminEnquiry>>, TError, UpdateAdminEnquiryMutationVariables, TContext>;
export declare const getGetAdminSiteSettingsUrl: () => string;
/**
 * @summary Get editable website settings
 */
export declare const getAdminSiteSettings: (options?: Parameters<typeof customFetch>[1]) => Promise<SiteSettings>;
export declare const getGetAdminSiteSettingsQueryKey: () => readonly ["/api/admin/site-settings"];
export declare const getGetAdminSiteSettingsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminSiteSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAdminSiteSettings>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminSiteSettings>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetAdminSiteSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminSiteSettings>>>;
export type GetAdminSiteSettingsQueryError = ErrorType<unknown>;
export declare function useGetAdminSiteSettings<TData = Awaited<ReturnType<typeof getAdminSiteSettings>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAdminSiteSettings>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getAdminSiteSettings>>, TError, Awaited<ReturnType<typeof getAdminSiteSettings>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAdminSiteSettings<TData = Awaited<ReturnType<typeof getAdminSiteSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAdminSiteSettings>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getAdminSiteSettings>>, TError, Awaited<ReturnType<typeof getAdminSiteSettings>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAdminSiteSettings<TData = Awaited<ReturnType<typeof getAdminSiteSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAdminSiteSettings>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getUpdateAdminSiteSettingsUrl: () => string;
/**
 * @summary Update website settings
 */
export declare const updateAdminSiteSettings: (siteSettingsUpdate: SiteSettingsUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<SiteSettings>;
export declare const getUpdateAdminSiteSettingsMutationKey: () => readonly ["updateAdminSiteSettings"];
export declare const getUpdateAdminSiteSettingsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminSiteSettings>>, TError, UpdateAdminSiteSettingsMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminSiteSettings>>, TError, UpdateAdminSiteSettingsMutationVariables, TContext>;
export type UpdateAdminSiteSettingsMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminSiteSettings>>>;
export type UpdateAdminSiteSettingsMutationBody = BodyType<SiteSettingsUpdate>;
export type UpdateAdminSiteSettingsMutationError = ErrorType<unknown>;
export type UpdateAdminSiteSettingsMutationVariables = {
    data: BodyType<SiteSettingsUpdate>;
};
/**
* @summary Update website settings
*/
export declare const useUpdateAdminSiteSettings: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminSiteSettings>>, TError, UpdateAdminSiteSettingsMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof updateAdminSiteSettings>>, TError, UpdateAdminSiteSettingsMutationVariables, TContext>;
export declare const getRequestUploadUrlUrl: () => string;
/**
 * Admin-only request. The client then uploads bytes directly to storage.
 * @summary Request a presigned App Storage upload URL
 */
export declare const requestUploadUrl: (uploadUrlInput: UploadUrlInput, options?: Parameters<typeof customFetch>[1]) => Promise<UploadUrlResponse>;
export declare const getRequestUploadUrlMutationKey: () => readonly ["requestUploadUrl"];
export declare const getRequestUploadUrlMutationOptions: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, RequestUploadUrlMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, RequestUploadUrlMutationVariables, TContext>;
export type RequestUploadUrlMutationResult = NonNullable<Awaited<ReturnType<typeof requestUploadUrl>>>;
export type RequestUploadUrlMutationBody = BodyType<UploadUrlInput>;
export type RequestUploadUrlMutationError = ErrorType<ErrorEnvelope>;
export type RequestUploadUrlMutationVariables = {
    data: BodyType<UploadUrlInput>;
};
/**
* @summary Request a presigned App Storage upload URL
*/
export declare const useRequestUploadUrl: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, RequestUploadUrlMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient) => UseMutationResult<Awaited<ReturnType<typeof requestUploadUrl>>, TError, RequestUploadUrlMutationVariables, TContext>;
export declare const getGetStorageObjectUrl: (objectPath: string) => string;
/**
 * Serves only objects marked for public website content or an authenticated admin.
 * @summary Serve an uploaded object
 */
export declare const getStorageObject: (objectPath: string, options?: Parameters<typeof customFetch>[1]) => Promise<Blob>;
export declare const getGetStorageObjectQueryKey: (objectPath: string) => readonly [`/api/storage/objects/${string}`];
export declare const getGetStorageObjectQueryOptions: <TData = Awaited<ReturnType<typeof getStorageObject>>, TError = ErrorType<ErrorEnvelope>>(objectPath: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetStorageObjectQueryResult = NonNullable<Awaited<ReturnType<typeof getStorageObject>>>;
export type GetStorageObjectQueryError = ErrorType<ErrorEnvelope>;
export declare function useGetStorageObject<TData = Awaited<ReturnType<typeof getStorageObject>>, TError = ErrorType<ErrorEnvelope>>(objectPath: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, Awaited<ReturnType<typeof getStorageObject>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetStorageObject<TData = Awaited<ReturnType<typeof getStorageObject>>, TError = ErrorType<ErrorEnvelope>>(objectPath: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, Awaited<ReturnType<typeof getStorageObject>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetStorageObject<TData = Awaited<ReturnType<typeof getStorageObject>>, TError = ErrorType<ErrorEnvelope>>(objectPath: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export {};
//# sourceMappingURL=api.d.ts.map