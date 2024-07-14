interface ViewGeometry {
    // Define properties related to the geometry of a view
    x: number; // x-coordinate of the view
    y: number; // y-coordinate of the view
    width: number; // width of the view
    height: number; // height of the view
    // Add more properties as needed, such as rotation, scale, etc.
}

interface ViewsCollectionGeometry {
    [viewId: string]: ViewGeometry; // Define a collection of views by their IDs
    // Optionally, you can include additional properties that describe the collection
    // For example, the total bounding box encompassing all views, etc.
}
