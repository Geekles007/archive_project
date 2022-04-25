
export default function checkPermission(permissionTitle?: string) {
    if (permissionTitle) {
        // const permissions = JSON.parse(localStorage.getItem('permissions') as string ?? "[]");
        const permissions = ["USER_MODULE", "ROLE_PERMISSION_MODULE", "FILE_MANAGER_MODULE", "EDIT_ROLE_ACTION", "MANAGE_PERMISSIONS_ACTION", "DELETE_ROLE_ACTION"];
        return permissions.includes(permissionTitle);
    } else {
        return true;
    }
    return false;
}